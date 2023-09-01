import {ref} from 'vue';
import { projectAuth } from '@/firebase/config.js';

const error = ref(null);

const login = async (email,password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email,password);
        error.value = null;
        return res;
    } catch (e) {
        console.log(e.message);
        error.value = e.message;
    }
};

const useLogin = () => {
    return {login,error}
};

export default useLogin;