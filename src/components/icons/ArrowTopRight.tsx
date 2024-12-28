import { FC } from 'react';
import { TIconProps } from '@/types/TIconProps';

export const ArrowTopRight: FC<TIconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.22 9.78a.75.75 0 0 0 1.06 0L8.5 2.56v5.69a.75.75 0 0 0 1.5 0V.75A.75.75 0 0 0 9.25 0h-7.5a.75.75 0 1 0 0 1.5h5.69L.22 8.72a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
