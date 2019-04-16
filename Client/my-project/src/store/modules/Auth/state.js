export default {
  user: null, // The user who has logged in
  success: null, // The response if the query or post is successful
  error: null, // the error in case query or post is unsuccessful
  isUserLoggedIn: false, // whether the user is logged in or not
  token: null, // the unique id provided to the user for surfing or logged in
  name: "", // the name of the user who has logged in or is billing
  email: null, // the email of the walk-in user
  authenticated: false, // whether the token is authenticated or not
  family_members: [], // It'll store the family members  ,
  membership: null,
  member: null
};
