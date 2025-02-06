import axios, { AxiosResponse } from 'axios';
import { ReviewAdapterType } from '@/utils/reviewAdapter/adapterTypes';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

interface ReviewsResponse {
  data: ReviewAdapterType[];
}

export const getReviews =
  async (): Promise<AxiosResponse<ReviewsResponse> | null> => {
    try {
      return await axios(`${BASE_URL}/api/reviews`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
    } catch {
      return null;
    }
  };
