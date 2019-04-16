export default {
  getProductDetails: state => id => {
    return state.products.find(products => products.id === (id < 1 ? id : 1));
  },
  getCoachDetails: state => id => {
    console.log("Getter: getCoachDetails " + id);
    return state.coaches.find(coaches => coaches.user_id === id);
  },
  getSlotDetails: state => id => {
    return state.allSlots.find(allSlots => allSlots.slot_id === id);
  },
  getLocationDetails: state => id => {
    // console.log("Get Location -> " + id);
    return state.locations.find(locations => locations.location_id === id);
  }
};
