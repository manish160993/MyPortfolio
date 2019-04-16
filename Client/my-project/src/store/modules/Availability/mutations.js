export default {
  getAvailableDates: (state, dates) => {
    state.user_session = 1;
    state.booked_slots = [];
    state.getAvailableDates = [];
    var i = 0;
    var booked = [];
    while (dates.data[i] != null) {
      //booked[i] = dates.data[i].booking_details_date+"T00:00:00.000Z";
      booked[i] = dates.data[i].booking_details_date; // Discontinued time since we're only recieving date now
      state.getAvailableDates[i] = booked[i];
      i++;
    }
    // console.log(state.getAvailableDates);
  },
  setUserSession: (state, value) => {
    // console.log("in mutation:" + value);
    // state.user_session = value;
    state.getAvailableDates = [];
    state.booked_slots = [];
  },

  getSessionBookings: (state, reserved_slots) => {
    var i = 0;
    console.log(JSON.stringify(reserved_slots.data));
    while (reserved_slots.data[i] != null) {
      if (reserved_slots.data[i]) {
        var j = 0;
        var l = 0;
        var booked = [];
        for (var k = 1; k <= 32; k++) {
          if (reserved_slots.data[i][j] && reserved_slots.data[i][j].slot_id === k) {
            j++;
            // console.log(k+"***")
            // continue;
          } else if (reserved_slots.data[i][j] && reserved_slots.data[i][j].slot_id < k) {
            j++;
            booked[l] = k;
            l++;
          } else {
            booked[l] = k;
            l++;
          }
        }
        state.booked_slots[i] = booked;
      }
      i++;
    }
    //state.reserved_slots = [];
  },

  getCoachAvailability: (state, reserved_slots) => {
    console.log(JSON.stringify(reserved_slots));
    state.coach_price = reserved_slots.data.coach_price;
    reserved_slots = reserved_slots.data.coach_available_slots;
    var i = 0;

    while (reserved_slots[i] != null) {
      if (reserved_slots[i]) {
        var j = 0;
        var booked = [];
        while (reserved_slots[i][j] != null) {
          booked[j] = reserved_slots[i][j].slot_id;
          j++;
        }
        state.booked_slots[i] = booked;
      }

      i++;
    }

    console.log(state.booked_slots);
  },

  checkout: (state, checkout) => {
    state.checkout = checkout.data;
  },

  reserve: (state, reserve) => {
    state.reserve = reserve.data;
  },

  sign_out: state => {
    state.cage_available_slots = null;
    state.submitted_slots = null;
    state.user_session = 0;
    state.coachavailableslots = [];
    state.getAvailableDates = [];
    state.booked_slots = [];
    state.reserved_slots = [];
    state.checkout = [];
  }
};
