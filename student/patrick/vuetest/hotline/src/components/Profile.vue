<template>
	<div class="ProfilePageGridContainer">

			<div class="EmptyProfileLeft"></div>
			<div class="ProfileName">{{CurrentUser.Username}}</div>
			<div class="ProfileImageSelect">
				<button v-for="Pic in CurrentUser.ProfilePictures" @click="ChangeMyViewedProfilePicture(Pic)"></button>
			</div>
			<div class="EmptyProfileRight"></div>
			<div class="ProfileImageDisplay">
				<img :src="CurrentImage" alt="Profile Picture">
			</div>
			<div @dblclick="EditBio" v-if="!EditMode" class="ProfileBio">{{CurrentUser.Bio}}</div>
			<textarea rows="10" cols="50" @dblclick="EditBio" v-if="EditMode" v-model="CurrentUser.Bio"></textarea>

	</div>
</template>

<script>
	export default {
		props: ["User"],
		data() {
			return {
				CurrentUser: {},
        EditMode: false,
        CurrentImage: null,
			};
		},
		methods: {
			EditBio() {
				if (!this.EditMode) {
					this.EditMode = true;
				} else {
					//update this specific field of this document in the Users Collection basically update bio.
					this.EditMode = false;
				}
			},
			ConvertUser() {
				this.CurrentUser = this.User;
				console.log(this.CurrentUser);
			},
      ChangeMyViewedProfilePicture(image)
      {
        this.CurrentImage = image;
			}
		},

		created() {
      this.ConvertUser();
      this.CurrentImage = this.CurrentUser.ProfilePictures[0];
		}
	};
</script>

<style>
	.ProfilePageGridContainer {
		max-height: 80vh;
		max-width: 100vw;
    height: 80vh;
    width:100vw;
    align-items:center;
    justify-content: center;
		overflow-x: none;
		display: grid;
		grid-template-columns: 30vw 20vw 20vw 1fr;
		grid-template-rows: 5% 5% 50% 40%;
		grid-template-areas:
			"EmptyProfileLeft ProfileName ProfileName EmptyProfileRight"
			"EmptyProfileLeft ProfileImageSelect ProfileImageSelect EmptyProfileRight"
			"EmptyProfileLeft ProfileImageDisplay ProfileImageDisplay EmptyProfileRight"
			"EmptyProfileLeft ProfileBio ProfileBio EmptyProfileRight";
	}

	.EmptyProfileLeft {
		grid-area: EmptyProfileLeft;
		width: 100%;
		height: 100%;
	}
	.ProfileName {
		grid-area: ProfileName;
		text-align: center;
		font-size: 20px;
		font-weight: bolder;
		text-shadow: 1px 0 0 #ad00ff, -1px 0 0 #ad00ff, 0 1px 0 #ad00ff,
			0 -1px 0 #ad00ff, 1px 1px #ad00ff, -1px -1px 0 #ad00ff, 1px -1px 0 #ad00ff,
			-1px 1px 0 #ad00ff;
	}
	.EmptyProfileRight {
		grid-area: EmptyProfileRight;
		width: 100%;
		height: 100%;
	}
	.ProfileImageSelect {
		grid-area: ProfileImageSelect;
		text-align: center;
	}
	.ProfileImageSelect > button {
    grid-area: ProfileImageSelect;
		border-radius: 20px;
		width: 4vw;
		height: 2vh;
	}
	.ProfileImageDisplay {
		grid-area: ProfileImageDisplay;
		text-align: center;
	}
	.ProfileImageDisplay > img {
		max-height: 40vh;
    max-width: 40vw;
    width: 40vw;
    height: 40vh;
		object-fit: contain;
		border-radius: 20px;
	}
	.ProfileBio {
		grid-area: ProfileBio;
		text-align: center;
		background: rgba(236, 68, 251, 0.75);
		border-radius: 20px;
	}
	.ProfileBio > div {
		overflow-y: scroll;
		max-height: 100%;
		max-width: 100%;
	}

	.ProfileBio > textarea {
    text-align: center;
    background: rgba(236, 68, 251, 0.75);
		max-height: 100%;
		max-width: 100%;
		height: 100%;
	}
</style>
