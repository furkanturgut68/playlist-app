<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create Playlist</h4>
    <input
      type="text"
      required
      placeholder="Playlist Title"
      v-model="enteredTitle"
    />
    <textarea
      required
      placeholder="Playlist Description"
      v-model="enteredDesc"
    ></textarea>
    <label>Upload playlist cover image</label>
    <input type="file" @change="handleImage" />
    <div class="error">
      {{ fileError }}
    </div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref as vueRef } from "vue";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes  } from "firebase/storage";
import { addDoc, collection, getFirestore,serverTimestamp } from "firebase/firestore";

export default {
  setup() {
    const enteredTitle = vueRef("");
    const enteredDesc = vueRef("");
    const file = vueRef(null);
    const fileError = vueRef(null);
    const auth = getAuth();
    const storage = getStorage();
    const displayName = vueRef(null);
    const currentUser = vueRef(null);

    // Firebase Authentication ile oturum açıksa kullanıcı bilgilerine erişme işlemi
    auth.onAuthStateChanged((user) => {
      if (user) {
        currentUser.value = user.uid;
        displayName.value = user.displayName
        console.log("current:"+displayName.value)
      } else {
        currentUser.value = null;
      }
    });

    // Upload Image
    const handleSubmit = async () => {
      if (file.value) {
        console.log(file.value);
        console.log("-----------------");
        console.log(currentUser.value);
        const storageRef = ref(
          storage,
          `covers/${file.value.name}`
        );
        const fileRef = file.value;
       // const path = fileURL.filePath
        const storageLocation = fileRef.fullPath;
        console.log("Path:"+storageLocation)
        

        await uploadBytes(storageRef, file.value);
        const db = getFirestore();

        // Firestore save
        try {
          const docRef = await addDoc(collection(db, 'playLists'), {
            coverUrl:  `covers/${currentUser.value}/${file.value.name}`,
            description: enteredDesc.value,
            title:enteredTitle.value,
            filePath: `covers/${currentUser.value}/${file.value.name}`,
            songs:[],
            userId:currentUser.value,
            userName:displayName.value,
            createdAt:serverTimestamp(),
          });

          enteredDesc.value = '';
          enteredTitle.value = '';

          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    };

    //File control
    const types = ["image/png", "image/jpeg", "image/jpg"];
    const handleImage = (e) => {
      const selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        fileError.value = "Please select image (png / jpg /jpeg)";
      }
    };

    return { enteredTitle, enteredDesc, handleSubmit, handleImage, fileError };
  },
};
</script>

<style >
input[type="file"] {
  border: 0;
  padding: 0;
}

label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}

button {
  margin-top: 20px;
}
</style>