import { AxiosInstance } from "../axios.js";

const getAllPosts = async (onSuccess, onError) => {
  try {
    const response = await AxiosInstance.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    onSuccess && onSuccess(response.data);
  } catch (err) {
    onError && onError(err);
  }
  return onSuccess;
};

export { getAllPosts };
