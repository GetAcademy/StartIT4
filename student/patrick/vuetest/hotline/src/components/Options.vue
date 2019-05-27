<template>
	<div class="OptionsPageGridContainer">
		<div class="OptionsImageButtons">
			<button v-for="Pic in CurrentUser.ProfilePictures" @click="CurrentImage = Pic"></button> <br/>
			<button
				class="DeleteButton"
				v-for="Pic in CurrentUser.ProfilePictures"
				@click="DeleteProfilePicture(Pic)"
			></button>
		</div>

		<div class="OptionsImage">
			<img :src="CurrentImage" alt="Missing">
		</div>

		<table class="OptionsTable">
			<tr>
				<div>
					<td>
						<div style="font-weight:bolder">Dating Preference:</div>
					</td>
					<td>
						<select v-model="CurrentUser.DatingPreference">
							<option value="Women">Women</option>
							<option value="Men">Men</option>
							<option value="Alien">Alien</option>
							<option value="Men and Women">Men & Women</option>
							<option value="Men and Alien">Men & Alien</option>
							<option value="Women and Alien">Women & Alien</option>
							<option value="Men and Alien and Women">Men & Alien & Women</option>
						</select>
					</td>
				</div>
			</tr>

			<tr>
				<div>
					<td>
						<div style="font-weight:bolder">Search Distance:</div>
					</td>
					<td>
						<div>
							<input v-model="CurrentUser.SearchDistance" type="number" min="1" max="100">
							<em>KM</em>
						</div>
					</td>
				</div>
			</tr>

			<tr>
				<div>
					<td>
						<div style="font-weight:bolder">Age Preference:</div>
					</td>
					<td>
						<div>
							<input
								v-model="CurrentUser.AgePreference[0]"
								onkeydown="return false"
								type="number"
								min="18"
								max="90"
								step="1"
							>
							<span>-</span>
							<input
								v-model="CurrentUser.AgePreference[1]"
								onkeydown="return false"
								type="number"
								min="18"
								max="90"
								step="1"
							>
							<span>år</span>
						</div>
					</td>
				</div>
			</tr>

			<tr>
				<td>
					<div style="font-weight:bolder">Upload Profile Picture:</div>
				</td>
				<td>
					<vue-dropzone id="drop1" :options="dropOptions"></vue-dropzone>
				</td>
			</tr>

			<tr>
				<div>
					<td>
						<div style="font-weight:bolder"></div>
					</td>
					<td>
						<button @click="UpdateUserSettings()">Save</button>
					</td>
				</div>
			</tr>
		</table>
	</div>
</template>

<script>
	import vueDropzone from "vue2-dropzone";
	import firebase from "@/FirebaseConfig/FireBaseStart";
	export default {
		props: ["User"],
		components: {
			vueDropzone,
			firebase
		},
		data() {
			return {
				CurrentUser: {},
				CurrentImage: "",
				db: firebase.firestore(),
				storage: firebase.storage(),
				storageRef: firebase.storage().ref(),
				dropOptions: {
					url: "http://localhost:8080"
				}
			};
		},
		methods: {
			ConvertUser() {
				this.CurrentUser = this.User;
				this.CurrentImage = this.CurrentUser.ProfilePictures[0];
				console.log(this.CurrentUser);
			},

			DeleteProfilePicture: async function(image) {
				let self = this;
				await this.storage.refFromURL(image).delete();

				for (let i = 0; i < self.CurrentUser.ProfilePictures.length; i++) {
					if (self.CurrentUser.ProfilePictures[i] == image) {
						self.CurrentUser.ProfilePictures.splice(i);
					}
				}

				let MyQueryReturn = await self.db
					.collection("Users")
					.where("Username", "==", self.CurrentUser.Username)
					.where("ProfilePictures", "array-contains", image)
					.get();

				if (MyQueryReturn.size == 1) {
					console.log(MyQueryReturn);
					let id = MyQueryReturn.docs[0].id;
					let docRef = db.collection("Users").doc(id);
					let cache = [];
					for (let g = 0; g < self.CurrentUser.ProfilePictures.length; g++) {
						cache.push(self.CurrentUser.ProfilePictures[g]);
					}

					await docRef.update({
						ProfilePictures: cache
					});
					console.log(self.CurrentUser.ProfilePictures);
					await UpdateLocalUser();
				} else {
					console.log("Error deleting image from firestore unsuccessfull");
				}
			},
			UpdateUserSettings() {
				this.getUser(this.CurrentUser.Username)
					.then(this.updateUser)
					.catch(function(error) {
						console.error(error);
					});
			},
			updateUser: async function(docId) {
				let self = this;
				//this is where the variables are actually updated.
				try {
					await this.db
						.collection("Users")
						.doc(docId)
						.update({ DatingPreference: self.CurrentUser.DatingPreference });
					await this.db
						.collection("Users")
						.doc(docId)
						.update({
							SearchDistance: parseInt(self.CurrentUser.SearchDistance)
						});
					await this.db
						.collection("Users")
						.doc(docId)
						.update({
							AgePreference: [
								parseInt(self.CurrentUser.AgePreference[0]),
								parseInt(self.CurrentUser.AgePreference[1])
							]
						});
					await self.UploadImage(document.getElementById("drop1").dropzone.files);
					await self.UpdateLocalUser();
					await alert("Document Updated!");
				} catch (error) {
					console.error(error);
				}
			},
      UploadImage: async function(Image)
      {
				let self = this;
				const file = Image;
        // the catch has a syntax error it needs sum fixing dont know why it shows up.
				//try {
					let ImageURL = [];

					for (let i = 0; i < file.length; i++) {
						let fileRef = self.storageRef.child(file[i].name);
						await fileRef.put(file[i]);
						ImageURL.push(await fileRef.getDownloadURL());
						alert(`Uploaded ${file[i].name}`);
					}

					let DataBaseQuery = await self.db
						.collection("Users")
						.where("Username", "==", self.CurrentUser.Username)
						.get();
					let DataBaseQueryID = await DataBaseQuery.docs[0].id;
					await self.db
						.collection("Users")
						.doc(DataBaseQueryID)
						.update({
							ProfilePictures: self.CurrentUser.ProfilePictures.concat(ImageURL)
						});
        //}
        // catch
        // {
				// 	console.log("Send Amberlamps");
				// }
			},
			getUser(username) {
				let self = this;
				return new Promise((resolve, reject) => {
					self.db
						.collection("Users")
						.where("Username", "==", username)
						.get()
						.then(function(querySnapshot) {
							querySnapshot.forEach(function(doc) {
								resolve(doc.id);
							});
							reject("no documents");
						})
						.catch(function(error) {
							reject(error);
						});
				});
			},
			UpdateLocalUser() {
				let self = this;
				this.db
					.collection("Users")
					.where("Username", "==", this.CurrentUser.Username)
					.where("Password", "==", this.CurrentUser.Password)
					.get()
					.then(function(querySnapshot) {
						if (querySnapshot.size > 0) {
              self.CurrentUser = querySnapshot.docs[0].data();
              self.$emit('current-user', self.CurrentUser); // emit with same name as Login emit, that works right?
						} else {
							console.log("Error Updating Local User");
						}
					});
			}
		},
		created() {
			this.ConvertUser();
		}
	};
</script>

<style>
	.OptionsPageGridContainer {
		max-height: 80vh;
		height: 80vh;
		display: grid;
		grid-template-columns: 35% 30% 35%;
		grid-template-rows: 10% 30% 60%;
		grid-template-areas:
			"EmptyOptionsLeft OptionsImageButtons EmptyOptionsRight"
			"EmptyOptionsLeft OptionsImage EmptyOptionsRight"
			"EmptyOptionsLeft OptionsTable EmptyOptionsRight";
		text-align: center;
		overflow-y: scroll;
	}

	.EmptyOptionsLeft {
		grid-area: EmptyOptionsLeft;
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%;
	}

	.EmptyOptionsRight {
		grid-area: EmptyOptionsRight;
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%;
	}

	.OptionsImageButtons {
		grid-area: OptionsImageButtons;
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	.OptionsImageButtons > button {
		width: 15%;
		height: 10%;
		border-radius: 20px;
		align-self: center;
	}

	.OptionsImage {
		grid-area: OptionsImage;
		border-radius: 20px;
		max-width: 100%;
		max-height: 100%;
		width: 100%;
		height: 100%;
	}

	.OptionsImage > img {
		border-radius: 20px;
		max-width: 100%;
		max-height: 100%;
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}

	.DeleteButton {
		background-color: red;
	}

	.OptionsTable {
		grid-area: OptionsTable;
		background: rgba(236, 68, 251, 0.75);
		border-radius: 20px;
		margin: 5px;
	}
</style>
