let axios = require("axios");
module.exports = async function googleValidate(token) {
  let apiEndPoint =
    "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + token;
  let response = await axios.get(apiEndPoint).catch(() => console.log("ERROR"));

  if (response.data["aud"] === process.env.GOOGLE_CLIENT_ID);
  {
    return response.data;
  }
};
