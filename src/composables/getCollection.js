import {ref} from 'vue';
import { projectFirestore } from '@/firebase/config.js';

const getCollection = (collection) => {
    const document = ref(null);
    const error = ref(null);

    let collectionRef = projectFirestore.collection(collection).orderBy("createdAt");

    collectionRef.onSnapshot(
        (snap) => {
            let result = [];
            snap.docs.forEach((doc) => {
                doc.data().createdAt && result.push({...doc.data(), id:doc.id});
            });
            document.value = result;
            error.value = null
        },
        (err) => {
            console.log(err.message);
            document.value = null
            error.value = 'could not fetch data'
        }
    );
    return {document,error}

};
export default getCollection;