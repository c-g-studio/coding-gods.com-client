// const { NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_API_TOKEN } = process.env;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllReviews = async () => {
  try {
    return await fetch(BASE_URL);
  } catch (error) {
    console.error(error);
  }
};
