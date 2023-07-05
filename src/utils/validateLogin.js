import { data } from "../utils/data";

export const validateUser = (login) => {
  if (data.find((user) => user.username === login.username)) {
    return true;
  } else {
    return false;
  }
};
