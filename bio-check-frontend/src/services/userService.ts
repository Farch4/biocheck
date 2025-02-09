import { api, requestConfig } from "../utils/config";

const profile = async (data: any, token: any) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(api + "users/profile", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const updateProfile = async (data: any, token: any) => {
  const config = requestConfig("PUT", data, token, true);

  try {
    const res = await fetch(api + "users/", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getUserDetails = async (id: any, token: any) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "users/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const userService = {
  profile,
  updateProfile,
  getUserDetails,
};

export default userService;