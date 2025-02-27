import { ReviewAdapterType } from '@/utils/reviewAdapter/adapterTypes';

const NEXT_PUBLIC_SANITY_BASE_URL = process.env.NEXT_PUBLIC_SANITY_BASE_URL;
const NEXT_PUBLIC_SANITY_API_TOKEN = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

interface ReviewsResponse {
  data: ReviewAdapterType[];
}

export const getReviews = async (): Promise<ReviewsResponse> => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_SANITY_BASE_URL}/api/reviews`, {
      headers: {
        Authorization: `Bearer ${NEXT_PUBLIC_SANITY_API_TOKEN}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return { data: [] };
  }
};
