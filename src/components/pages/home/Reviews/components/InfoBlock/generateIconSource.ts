export const generateIconSource = (name: string): string => {
  switch (name) {
    case 'google':
      return '/images/reviews/icons-social/google_maps.svg';
    case 'facebook':
      return '/images/reviews/icons-social/facebook.svg';
    case 'instagram':
      return '/images/reviews/icons-social/instagram.svg';
    case 'twitter':
      return '/images/reviews/icons-social/twitter.svg';
    case 'linkedin':
      return '/images/reviews/icons-social/linkedin.svg';
    default:
      return '/images/globe.svg';
  }
};
