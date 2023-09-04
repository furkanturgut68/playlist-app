<template>
  <form @submit.prevent="handleSubmit">
    <h2>Login</h2>
    <input type="email" placeholder="Email Adress" v-model="enteredMail" />
    <input type="password" placeholder="Password" v-model="enteredPass" />

    <button v-if="!isPending">Login</button>
    <button v-if="isPending">Loading</button>

    <div v-if="error">
      {{ error }}
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  setup() {
    const enteredMail = ref("");
    const enteredPass = ref("");
    const error = ref(null);
    const router = useRouter();
    const isPending = ref(false);

    const handleSubmit = () => {
      isPending.value = true;
      signInWithEmailAndPassword(
        getAuth(),
        enteredMail.value,
        enteredPass.value
      )
        .then(() => {
          // Signed in
          console.log("OK");
          isPending.value = false;
          enteredMail.value = '';
          enteredPass.value = '';

          // ...
          router.push({name:'HomeView'});

        })
        .catch((err) => {
          error.value = err.message;
          console.log(err.code);
          isPending.value = false;
        });
    };
    return { enteredMail, enteredPass, handleSubmit, error, isPending };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>