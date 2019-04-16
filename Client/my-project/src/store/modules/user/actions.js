import User_Register_Login_Service from "@/services/User_Authentication_Services";
import User_Details from "@/services/User_Details_Services";
import * as mutations from "./mutations";
import Vue from "vue";
import router from "./../../../router";

/**
 * {This is used to logout the user and remove it from state and local storage.}
 */
export const sign_out = ({ commit }) => {
  commit("sign_out");
};

/**
 * payload: {user_email, user_password} req
 * res: {get the Member}
 * next: {Services: User_Register_Login_Service >> Function: register_member}
 */
// export const register_member = async ({ commit }, payload) => {
//   try {
//     let register_member = await User_Register_Login_Service.register_member(
//       payload
//     )
//       .then(response => {
//         //commit('register_login', [response,null])
//         commit(
//           "success_message",
//           "You have successfully registered as Member. Please log in to continue"
//         );
//       })
//       .catch(err => {
//         commit("setError", err.response.data.error);
//       });
//   } catch (err) {
//     commit("setError", "Register Member failed");
//   }
// };

export const register_member = ({ commit }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      let login = await User_Register_Login_Service.register_member(payload)
        .then(response => {
          commit(
            "success_message",
            "You have successfully registered as Member. Please log in to continue"
          );
          resolve(response);
          console.log(response);
        })
        .catch(err => {
          commit("setError", err.response.data.error);
          console.log(err.response);
          reject(err);
        });
    } catch (err) {
      commit("setError", err.response.data.error);
      console.log("Error: " + err.response);
    }
  });
};

/**
 * payload: {user_email, user_password, user_role} req
 * res: {get the User}
 * next: {Services: User_Register_Login_Service >> Function: register}
 */
export const register = async ({ commit }, payload) => {
  try {
    console.log("Hello");
    let register = await User_Register_Login_Service.register(payload)
      .then(response => {
        //commit('register_login', [response,null])
        commit(
          "success_message",
          "Email has been sent to you for confirmation."
        );
      })
      .catch(err => {
        commit("setError", err.response.data.error);
      });
  } catch (err) {
    commit("setError", err.response.data.error);
  }
};

export const registerComplete = async ({ commit }, payload) => {
  try {
    commit("registerComplete", payload);
    let register = await User_Register_Login_Service.registerComplete()
      .then(response => {
        //commit('register_login', [response,null])
        commit("delete_token");
        commit("success_message", "You have successfully registered.");
      })
      .catch(err => {
        console.log(err.response.data.error);
        commit("setError", err.response.data.error);
      });
  } catch (err) {
    commit("setError", err.response.data.error);
  }
};

/**
 * payload: {user_email, user_password} req
 * res: {get the user after login and token}
 * next: {Services: User_Register_Login_Service >> Function: login}
 */
export const login = ({ commit }, payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      let login = await User_Register_Login_Service.login(payload)
        .then(response => {
          commit("register_login", response);
          commit("success_message", "You have successfully logged in");
          resolve(response);
        })
        .catch(err => {
          commit("sign_out");
          commit("setError", err.response.data.error);
          reject(err);
        });
    } catch (err) {
      commit("setError", err.response.data.error);
    }
  });
};

/**
 * payload: {user_email, user_password, user_name, user_contact,  sq_id, user_answer, user_tnc} req
 * res: {set the Account details }
 * next: {Services: User_Register_Login_Service >> Function: saveProfile}
 */
export const saveProfile = async ({ commit }, payload) => {
  try {
    console.log("saveProfile payload:");
    console.log(payload);
    let login = await User_Register_Login_Service.saveProfile(payload)
      .then(response => {
        commit("saveProfile", response);
        commit("success_message", "You have successfully updated the profile");
      })
      .catch(err => {
        commit("setError", err.response.data.error);
      });
  } catch (err) {
    commit("setError", err);
  }
};

/**
 * payload: {user_email, user_password, user_sq_ans, sq_id} req
 * res: {get the User details}
 * next: {Services: User_Register_Login_Service >> Function: forgotPassword}
 */
export const forgotPassword = async ({ commit }, payload) => {
  try {
    let password_reset = await User_Register_Login_Service.forgotPassword(
      payload
    )
      .then(response => {
        commit("success_message", "You have successfully changed the password");
      })
      .catch(err => {
        commit("setError", err.response.data.error);
      });
  } catch (err) {
    commit("setError", err);
  }
};

export const setError = ({ commit }, error) => {
  commit("setError", error);
};

export const success_message = ({ commit }, message) => {
  commit("success_message", message);
};

/**
 * @param {} req
 * @param {Will return the member or coach whichever is found using token}} res
 */
export const check = ({ commit }, dispatch) => {
  console.log("********************* Token: " + localStorage.getItem("token"));
  if (!!localStorage.getItem("token")) {
    let user = User_Register_Login_Service.fetchUser()
      .then(response => {
        commit("checkAuthentication", response);
        //commit('checkAuthentication');
      })
      .catch(err => {
        commit("setError", err.response.data.error);
      });
  }
};

export const purchaseMembership = async ({ commit }) => {
  let getPurchasedSlots = await User_Details.purchaseMembership()
    .then(response => {
      commit("purchaseMembership", response);
    })
    .catch(err => {
      console.log(err);
      alert(err.response.data.error);
    });
};

export default {
  sign_out,
  register,
  register_member,
  login,
  setError,
  success_message,
  forgotPassword,
  saveProfile,
  check,
  registerComplete,
  purchaseMembership
};
