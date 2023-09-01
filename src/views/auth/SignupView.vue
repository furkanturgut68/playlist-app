<template>
  <form @submit.prevent="handleLogin">
    <h2>Register</h2>

    <input
      type="text"
      placeholder="Display Name"
      v-model="displayName"
      required
    />
    <input type="email" placeholder="E-Mail" v-model="enteredMail" required />
    <input
      type="password"
      placeholder="Password"
      v-model="enteredPass"
      required
    />
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending">Loading</button>
    <div>
        {{ error }}
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

export default {
  setup() {
    const displayName = ref("");
    const enteredMail = ref("");
    const enteredPass = ref("");
    const error = ref(null);
    const isPending = ref(null);

    const handleLogin = () => {
        isPending.value = true
      createUserWithEmailAndPassword(
        getAuth(),
        enteredMail.value,
        enteredPass.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          isPending.value = false

          return updateProfile(user, {
            displayName: displayName.value,

          });
          
          
        })
        .catch((err) => {
          error.value = err.message;
          isPending.value = false
        });
    };

    return {displayName,enteredMail,enteredPass,handleLogin,isPending,error};
  },
};
</script>

<style scoped>
h2 {
    text-align: center;
}
</style>
