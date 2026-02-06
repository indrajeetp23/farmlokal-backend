import axios from "axios";

export const verifyGoogleToken = async (token) => {
  const { data } = await axios.get(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
  );
  return data;
};

