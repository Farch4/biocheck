import { api, requestConfig } from "../utils/config";

const publishPhoto = async (data: any, token: any) => {
  const config = requestConfig("POST", data, token, true);

  try {
    const res = await fetch(api + "photos", config)
      .then((res) => res.json())
      .catch(() => []);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const tryParseListToJson = (response: any)=>{
    try{
        let ret = response.json()
        return ret;
    }catch(e){
        return []
    }
}

const getUserPhotos = async (id: any, token: any) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "photos/user/" + id, config)
      .then((res) => tryParseListToJson(res))
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getPhoto = async (id: any, token: any) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const deletePhoto = async (id: any, token: any) => {
  const config = requestConfig("DELETE", "", token);

  try {
    const res = await fetch(api + "photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const updatePhoto = async (data: any, id: any, token: any) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const like = async (id: any, token: any) => {
  const config = requestConfig("PUT", null, token);

  try {
    const res = await fetch(api + "photos/like/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const comment = async (data: any, id: any, token: any) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "photos/comment/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getPhotos = async (token: any) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "photos", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const searchPhotos = async (query: any, token: any) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "photos/search?q=" + query, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

const photoService = {
  publishPhoto,
  getUserPhotos,
  getPhoto,
  deletePhoto,
  updatePhoto,
  like,
  comment,
  getPhotos,
  searchPhotos,
};

export default photoService;