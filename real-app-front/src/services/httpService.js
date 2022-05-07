import axios from "axios";


axios.interceptors.response.use(null, (error) => {
  const { response } = error;

  if (!response) {
    console.log("Bad connection to server");
  } else if (response.status >= 403) {
    console.log("An unexpected error occurred");
  }
  return Promise.reject(error);
});

function setDefaultCommonHeaders(header, value) {
  axios.defaults.headers.common[header] = value;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setDefaultCommonHeaders,
};
