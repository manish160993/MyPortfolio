// auth
export default {
  // name: "", // the name of the user who has logged in or is billing
  // email: null, // the email of the walk-in user
  // authenticated: false, // whether the token is authenticated or not
  // family_members: [], // It'll store the family members
  // membership: null
};

// availability
export default {
  // cage_available_slots: null, 
  // submitted_slots: null,
  // user_session: null,
  coachavailableslots: [],
  getAvailableDates: [],
  booked_slots: [],
  reserved_slots: [],
  checkout: [],
  coach_price: null,
  reserve: []
}

// details
export default {
  user_type: [], // Available users that can be created
  security_questions: [],
  family_members: [],
  locations: [],
  coaches: [],
  allSlots: [],
  products: [],
  stateNames: [],
  purchasedSlots: [],
  userList: [],
  prices: null,
  transactionSlots: []
};

// user
export default {
  user: null, // The user who has logged in - auth.user
  authSuccess: null, // The response if the query or post is successful - auth.success
  authError: null, // the error in case query or post is unsuccessful - auth.error
  isUserLoggedIn: false, // whether the user is logged in or not - auth.isUserLoggedIn
  token: null, // the unique id provided to the user for surfing or logged in - auth.token
}

// product
export default {
}

// coach
export default {
}

// location
export default {
}

// promotions
export default {
}
