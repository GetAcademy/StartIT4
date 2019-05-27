    // Initialize Firebase
            var config = {
                apiKey: "",
                authDomain: "firestoretest-1b8d9.firebaseapp.com",
                databaseURL: "https://firestoretest-1b8d9.firebaseio.com",
                projectId: "firestoretest-1b8d9",
                storageBucket: "firestoretest-1b8d9.appspot.com",
                messagingSenderId: "602922580279"
            };
            firebase.initializeApp(config);
            const db = firebase.firestore();
            db.settings({ timestampsInSnapshots: true });