import {ref} from 'vue';
import { projectAuth } from '@/firebase/config.js';

const err = ref(nul);

const logout = async () => {
    err.value = null;

    try {
        await projectAuth.signOut();
    } catch (error) {
        console.log(error.message);
        err.value = error.message;
    }
};

const useLogout = () => {
    return {err,logout}
}

export default useLogout;