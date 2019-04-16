import Vue from "vue";
export default {
  /**
   * This is used to logout the user and remove him from state and local storage.
   */
  sign_out: state => {
    state.user = null;
    state.isUserLoggedIn = false;
    state.token = null;
    state.success = null;
    state.error = null;
    state.authenticated = false;
    state.name = null;
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("membership");
  },

  /**
   * This method is used to register and login the users and store token in local storage.
   */
  register_login: (state, response) => {
    state.user = response.data.user;
    state.token = response.data.token;
    state.name = state.user.user_name;
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user_role", response.data.user.user_role);
    state.authenticated = true;
    state.isUserLoggedIn = true;
    state.error = null;
    state.membership = response.data.membership;
    localStorage.setItem("membership", response.data.membership);
  },

  /**
   * This method is used to save the profile of the user.
   */
  saveProfile: (state, response) => {
    state.user = response.data.user;
    state.token = response.data.token;
    localStorage.setItem("token", response.data.token);
    state.error = null;
    state.name = state.user.user_name || state.user.family_member_name;
  },

  /**
   * This method is used to select the facility available for the users.
   */
  setWalkinToken: (state, response) => {
    state.token = response[0].data.token;
    state.name = response[0].data.w_name;
    state.email = response[0].data.w_email;
  },

  registerComplete: (state, response) => {
    localStorage.setItem("token", response.token);
  },

  delete_token: state => {
    localStorage.removeItem("token");
  },

  /**
   * This method is used to save the profile of the user.
   */
  saveProfile: (state, response) => {
    state.user = response.data.user;
    state.token = response.data.token;
    //localStorage.setItem('token', response.data.token);
    state.error = null;
    state.name = state.user.user_name || state.user.family_member_name;
  },
  /**
   * This method is used to set the display name of the user and store it in the local storage
   */
  setName: (state, billedUser) => {
    state.name = billedUser.billedUserName;
    localStorage.setItem("name", state.name);
  },

  setError: (state, error) => {
    state.error = error;
    state.success = null;
  },

  setUserLoggedIn: (state, value) => {
    state.isUserLoggedIn = value;
    state.error = null;
  },

  success_message: (state, message) => {
    state.success = message;
    state.error = null;
  },

  purchaseMembership: (state, response) => {
    state.membership = response.data.membership;
    localStorage.setItem("membership", response.data.membership);
  },
  /**
   * This method is used to set the user, name & token from the local storage once verified.
   */
  checkAuthentication: (state, response) => {
    state.authenticated = !!localStorage.getItem("token");
    if (state.authenticated) {
      if (response) {
        state.user = response.data.user;
        state.error = null;
        state.name = state.user.user_name;
        state.isUserLoggedIn = true;
        state.token = localStorage.getItem("token");
        state.error = null;
      }
      // Vue.$http.defaults.headers.common.Authorization = `${localStorage.getItem('token')}`;
    }
  }
};
