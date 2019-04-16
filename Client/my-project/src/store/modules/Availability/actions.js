import store from "@/store";
import Availability from "@/services/Availability_Services";

export const getAvailableDates = async ({ commit }, payload) => {
  let getAvailableDates = await Availability.getAvailableDates(payload)
    .then(response => {
      console.log("-- Action: getAvailableDates " + JSON.stringify(response.data));
      commit("getAvailableDates", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: availaility/getAvailableDates " + JSON.stringify(err.response.data.error));
    });
};

export const getSessionBookings = async ({ commit }, payload) => {
  let getSessionBookings = await Availability.getSessionBookings(payload)
    .then(response => {
      console.log("-- Action: getSessionBookings " + JSON.stringify(response.data));
      commit("getSessionBookings", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: availaility/getSessionBookings " + JSON.stringify(err.response.data.error));
    });
};
export const getReserveAvailability = async ({ commit }, payload) => {
  let getSessionBookings = await Availability.getReserveAvailability(payload)
    .then(response => {
      console.log("-- Action: getReserveAvailability " + JSON.stringify(response.data));
      commit("getSessionBookings", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: availaility/getReserveAvailability " + JSON.stringify(err.response.data.error));
    });
};

export const getCoachAvailability = async ({ commit }, payload) => {
  let getCoachAvailability = await Availability.getCoachAvailability(payload)
    .then(response => {
      console.log("-- Action: getCoachAvailability " + JSON.stringify(response.data));
      commit("getCoachAvailability", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: availaility/getCoachAvailability " + JSON.stringify(err.response.data.error));
    });
};

export const setUserSession = ({ commit }, user_session) => {
  // console.log("user_session:"+ user_session)
  commit("setUserSession", user_session);
};

export const sign_out = ({ commit }) => {
  commit("sign_out");
};

export const checkout = async ({ commit }, payload) => {
  //console.log("get Locations")
  let checkout = await Availability.checkout(payload)
    .then(response => {
      commit("checkout", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: availaility/checkout " + JSON.stringify(err.response.data.error));
    });
};

export const reserve = async ({ commit }, payload) => {
  //console.log("get Locations")
  let reserve = await Availability.reserve(payload)
    .then(response => {
      //commit("reserve", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: availaility/reserve " + JSON.stringify(err.response.data.error));
    });
};

export const removeItem = async ({ commit }, payload) => {
  //console.log("get Locations")
  let removeItem = await Availability.removeItem(payload)
    .then(response => {
      console.log("Successfully removed slot");
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: availaility/removeItem " + JSON.stringify(err.response.data.error));
    });
};

export const purchase = async ({ commit }, payload) => {
  let purchase = await Availability.purchase(payload)
    .then(response => {
      console.log("Successfully purchased items");
      commit("checkout", response);
    })
    .catch(err => {
      console.log(err);
      alert("-- Action: availaility/purchase " + JSON.stringify(err.response.data.error));
    });
};

export default {
  getAvailableDates,
  getSessionBookings,
  getCoachAvailability,
  setUserSession,
  checkout,
  removeItem,
  sign_out,
  purchase,
  getReserveAvailability,
  reserve
};
