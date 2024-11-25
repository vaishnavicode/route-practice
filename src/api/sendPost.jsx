import { AxiosInstance } from "../axios.js";

const sendPost = async (onSuccess, onError, data) => {
  try {
    const response = await AxiosInstance.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );

    onSuccess && onSuccess(response);
  } catch (err) {
    onError && onError(err);
  }
  return onSuccess;
};

export { sendPost };
