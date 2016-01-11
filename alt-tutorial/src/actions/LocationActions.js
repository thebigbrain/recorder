import alt from "../control";

class LocationActions {
  updateLocations(locations) {
    this.dispatch(locations);
  }

  fetchLocations() {
    this.dispatch();
  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  favoriteLocation(location) {
    this.dispatch(location);
  }
}

export default alt.createActions(LocationActions);
