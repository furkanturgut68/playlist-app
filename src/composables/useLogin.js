import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const error = ref(null);
  const auth = getAuth();

const login = async (email, password) => {
  // error.value = null

  // try {
  //     const res = await signInWithEmailAndPassword(auth,email,password);
  //     error.value = null;
  //     return res;
  // } catch (e) {
  //     console.log(e.message);
  //     error.value = e.message;
  // }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((err) => {
      error.value = err.message;
    });
};

const useLogin = () => {
  return { login, error };
};

export default useLogin;
