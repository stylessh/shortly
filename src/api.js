import axios from "axios";
let baseURL = "https://rel.ink/api/links/";

export const createShortedLink = async (link) => {
  const { data } = await axios.post(baseURL, {
    url: link,
  });

  return data;
};

export const getShortedLink = async (id) => {
  const { data } = await axios.get(`${baseURL}${id}`);

  return data;
};
