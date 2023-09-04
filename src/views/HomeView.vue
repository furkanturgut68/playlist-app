<template>
  <div >
    <list-view :playLists="playlists"></list-view>
  </div>
</template>

<script>
import { collection, getDocs,getFirestore } from "firebase/firestore";
import {firebaseConfig} from "../firebase/config.js";
import {initializeApp} from "firebase/app";
import { ref, onMounted } from "vue";
import ListView from "@/components/ListView.vue";

export default {
  components:{
    ListView
  },
  setup() {
    const playlists = ref([]);
    const firebaseApp=initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);

     onMounted( async ()  =>  {
      const querySnapshot = await getDocs(collection(db, "playLists"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);

        playlists.value.push(doc.data())
      });
    });

    return { playlists };
  },
};
</script>

<style></style>
