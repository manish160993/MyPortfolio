import User_Details from "@/services/User_Details_Services";
import store from "@/store";
import * as mutations from "./mutations";

export const get_user_type = async ({ commit }) => {
  //console.log("get Locations")
  let get_user_type = await User_Details.get_user_type()
    .then(response => {
      commit("get_user_type", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/get_user_type " + JSON.stringify(err.response.data.error));
    });
};

export const getUsers = async ({ commit }) => {
  let getUsers = await User_Details.getUsers()
    .then(response => {
      commit("getUsers", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getUsers " + JSON.stringify(err.response.data.error));
    });
};

export const sign_out = ({ commit }) => {
  commit("sign_out");
};

export const getSecurityQuestions = async ({ commit }) => {
  //console.log("get Locations")
  let getSecurityQuestions = await User_Details.getSecurityQuestions()
    .then(response => {
      commit("getSecurityQuestions", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getSecurityQuestions " + JSON.stringify(err.response.data.error));
    });
};

export const getFamilyMembers = async ({ commit }) => {
  let FamilyMembers = await User_Details.getFamilyMembers()
    .then(response => {
      commit("getFamilyMembers", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getFamilyMembers " + JSON.stringify(err.response.data.error));
    });
};

export const getLocations = async ({ commit }) => {
  let Locations = await User_Details.getLocations()
    .then(response => {
      commit("getLocations", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getLocations " + JSON.stringify(err.response.data.error));
    });
};
export const getLocations_User = async ({ commit }) => {
  let Locations = await User_Details.getLocations_User()
    .then(response => {
      commit("getLocations", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getLocations_User " + JSON.stringify(err.response.data.error));
    });
};

export const getCoaches = async ({ commit }, payload) => {
  let Coaches = await User_Details.getCoaches(payload)
    .then(response => {
      commit("getCoaches", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getCoaches " + JSON.stringify(err.response.data.error));
    });
};

export const getAllSlots = async ({ commit }) => {
  let AllSlots = await User_Details.getAllSlots()
    .then(response => {
      commit("getAllSlots", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getAllSlots " + JSON.stringify(err.response.data.error));
    });
};

export const getPurchasedSlots = async ({ commit }) => {
  let getPurchasedSlots = await User_Details.getPurchasedSlots()
    .then(response => {
      commit("getPurchasedSlots", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getPurchasedSlots " + JSON.stringify(err.response.data.error));
    });
};

export const getAllPurchasedSlots = async ({ commit }) => {
  let getAllPurchasedSlots = await User_Details.getAllPurchasedSlots()
    .then(response => {
      commit("getAllPurchasedSlots", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getAllPurchasedSlots " + JSON.stringify(err.response.data.error));
    });
};

export const getReservedSlots = async ({ commit }) => {
  let getReservedSlots = await User_Details.getReservedSlots()
    .then(response => {
      commit("getReservedSlots", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getReservedSlots " + JSON.stringify(err.response.data.error));
    });
};

export const getPrices = async ({ commit }) => {
  let getPurchasedSlots = await User_Details.getPrices()
    .then(response => {
      // console.log(JSON.stringify(response))
      commit("getPrices", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getPrices " + JSON.stringify(err.response.data.error));
    });
};

export const getCard = async ({ commit }) => {
  let getCard = await User_Details.getCard()
    .then(response => {
      // console.log(JSON.stringify(response))
      commit("getCard", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: details/getCard " + JSON.stringify(err.response.data.error));
    });
  console.log("Im Here")
};

export const products = ({ commit }, response) => {
  commit("products", response);
};

export const stateNames = ({ commit }, response) => {
  commit("stateNames", response);
};

export const updateCard = async ({ commit }, payload) => {
  try {
    console.log("updateCard:");
    console.log(payload);
    await User_Details.updateCard(payload)
      .then(response => {
        commit("updateCard", response);
        // commit("success_message", "You have successfully updated your Card");
        alert("Your card is Updated")
      })
      .catch(err => {
        console.log(err);
        alert("-- Action: details/updateCard " + JSON.stringify(err.response.data.error));
      });
  } catch (err) {
    commit("setError", err);
  }
};

export default {
  get_user_type,
  getSecurityQuestions,
  getFamilyMembers,
  getLocations,
  getCoaches,
  getAllSlots,
  products,
  stateNames,
  sign_out,
  getPurchasedSlots,
  getAllPurchasedSlots,
  getUsers,
  getPrices,
  getLocations_User,
  getReservedSlots,
  getCard,
  updateCard
};
