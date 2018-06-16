<template>
  <div id="login">
    <div class="text-body">
      <h2 class="title">Login</h2>
      <div class="form-group">
        <label for="email">Email address</label>
        <input 
          id="email" 
          v-model="email" 
          type="email" 
          class="form-control" 
          aria-describedby="emailHelp" 
          placeholder="Enter your email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
          id="password" 
          v-model="password" 
          type="password" 
          class="form-control" 
          placeholder="Enter your password">
      </div>
      <div 
        v-if="isRegistering" 
        class="form-group">
        <label for="passwordConfirm">Confirm your password</label>
        <input 
          id="passwordConfirm" 
          v-model="passwordConfirm" 
          type="password" 
          class="form-control" 
          placeholder="Confirm your password">
      </div>
      <div 
        v-if="isRegistering" 
        class="form-group">
        <label for="userType">Who are you?</label>
        <select 
          id="userType" 
          v-model="userType" 
          class="form-control">
          <option>Curator</option>
          <option>Academic</option>
          <option>Commercial</option>
          <option>Private Individual</option>
        </select>
      </div>
      <button
        v-if="!isRegistering"
        type="submit"
        class="btn btn-primary"
        @click="login"
      >
        Login
      </button>
      <button
        type="submit"
        class="btn btn-success"
        @click="startRegistration"
      >
        Register an Account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      userType: "",
      isRegistering: false
    };
  },
  methods: {
    login() {
      console.log("Login");
    },
    startRegistration() {
      this.isRegistering = true;
      console.log("Registering");
    }
  }
};
</script>

<style scoped>
html,
body,
#login {
  background: white !important;
  height: 100%;
  width: 100%;
}
.text-body {
  background: white;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 10px;
  padding-bottom: 50px;
  /* text-align: center; */
}
.text-body p {
  text-align: justify;
  color: #626262;
}
.text-body h2 {
  padding-top: 50px;
}
#people-container {
  background: #111;
  padding-left: 20%;
  padding-right: 20%;
  text-align: center;
  padding-bottom: 50px;
}
#people-container h2 {
  color: white;
}
.person-card {
  max-height: 500px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
}
.person-card h2 {
  color: black !important;
}
.person {
  width: 100%;
}
.person-text-container {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: white;
}
.title {
  font-weight: 800;
  padding-top: 50px;
  margin-bottom: 50px;
}
</style>
