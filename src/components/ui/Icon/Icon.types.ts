import { IconConfig } from '@/components/ui/Icon/Icon.config';
import { TIconProps } from '@/types/TIconProps';

type IconType = keyof typeof IconConfig;

export interface TIconComponentProps extends TIconProps {
  type: IconType;
  className?: string;
}
