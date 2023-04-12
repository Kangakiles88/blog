import store from "../../store";
import { USER_LOADING_REQUEST } from "../../redux/types";

const loadUser = () => {
  try {
    store.dipatch({
      type: USER_LOADING_REQUEST,
      payload: localStorage.getItem("token"),
    });
  } catch (e) {
    console.log(e);
  }
};

export default loadUser;
