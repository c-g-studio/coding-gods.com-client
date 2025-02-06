import {
  ResponseAdapterType,
  ReviewAdapterType,
} from '@/utils/reviewAdapter/adapterTypes';

export const reviewAdapter = (
  responseData: ReviewAdapterType[],
): ResponseAdapterType[] => {
  return responseData.map(review => ({
    id: String(review.id),
    documentId: review.documentId,
    name: review.name,
    link: review.link,
    createdAt: review.createdAt,
    updatedAt: review.updatedAt,
    publishedAt: review.publishedAt,
    source: review.source,
    description: review.description
      .map(paragraph =>
        paragraph.children.map(textNode => textNode.text).join(' '),
      )
      .join('\n'),
    avatar: review.avatar?.[0]?.url,
  }));
};
