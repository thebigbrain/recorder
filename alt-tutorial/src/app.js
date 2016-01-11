import LocationStore from "./stores/LocationStore";
import LocationActions from "./actions/LocationActions";

var actions = [1,3];
setTimeout(function(){
	LocationActions.updateLocations(actions);
});