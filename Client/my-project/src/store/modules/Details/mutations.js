export default {
  get_user_type: (state, user_type) => {
    state.user_type = user_type.data;
  },

  getSecurityQuestions: (state, security_questions) => {
    state.security_questions = security_questions.data;
  },

  getFamilyMembers: (state, family_members) => {
    state.family_members = family_members.data;
  },

  getFamilyMembers: (state, family_members) => {
    state.family_members = family_members.data;
  },

  getLocations: (state, locations) => {
    state.locations = locations.data;
  },

  updateCard: (state, response) => {
    state.card = response.data;
  },

  // getLocations: (state, locations) => {
  //   state.locations = locations.data;
  // },

  getCoaches: (state, coaches) => {
    state.coaches = coaches.data;
  },

  getAllSlots: (state, allSlots) => {
    state.allSlots = allSlots.data;
  },

  products: (state, products) => {
    state.products = products;
  },

  stateNames: (state, stateNames) => {
    state.stateNames = stateNames;
  },

  sign_out: state => {
    state.family_members = [];
    state.coaches = [];
  },

  getPurchasedSlots: (state, response) => {
    state.purchasedSlots = response.data;
  },

  getCard: (state, response) => {
    state.card = response.data.card;
  },

  getAllPurchasedSlots: (state, response) => {
    state.purchasedSlots = response.data;
  },

  getReservedSlots: (state, response) => {
    // console.log("get reserved slot "+JSON.stringify(response))
    state.purchasedSlots = response.data[0];
    state.transactionSlots = response.data[1];
  },

  getUsers: (state, response) => {
    state.userList = response.data;
  },

  getPrices: (state, response) => {
    // console.log(JSON.stringify(response))
    state.prices = response.data;
  }
};
