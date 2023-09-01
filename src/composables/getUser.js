import {ref} from 'vue';
import { getAuth } from 'firebase/auth';

const auth = getAuth();
const user = ref(auth.currentUser);

auth.onAuthStateChanged((_user) => {
    user.value = _user;
});

const getUser = () => {
    return {user}
}

export default getUser