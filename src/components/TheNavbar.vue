<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/logo.png" alt="" />
      <router-link :to="{ name: 'HomeView' }"><h1>PlayList</h1></router-link>
      <div class="links">
        <div v-if="user">
          <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'LoginView' }"
            >Login</router-link
          >
          <router-link class="btn" :to="{ name: 'SignupView' }"
            >Sign Up</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
export default {
  setup() {
    const user = ref(null);

    const auth = getAuth();
    const router = useRouter();

    onAuthStateChanged(auth, (u) => {
      if (u) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
         user.value = u.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          console.log("Log out!");
          user.value = null
          router.push({ name: "LoginView" });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return { handleLogout, user };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 50px;
  background: rgb(231, 178, 178);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

nav h1 {
  margin-left: 20px;
}

nav .links {
  margin-left: auto;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}

nav img {
  max-height: 60px;
}
</style>