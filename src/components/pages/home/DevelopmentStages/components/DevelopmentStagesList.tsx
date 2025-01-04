import { FC } from 'react';

import { Icon } from '@/components/ui/Icon/Icon';
import { Typography } from '@/components/ui/Typography/Typography';
import { classnames } from '@/utils/classnames';

import data from '@/components/pages/home/DevelopmentStages/data.json';
import { IconConfig } from '@/components/ui/Icon/Icon.config';

type StageType = keyof typeof IconConfig;

export const DevelopmentStagesList: FC = () => {
  return (
    <ul className="space-y-7">
      {data.map((stage, index) => (
        <li
          key={stage.type}
          className={classnames(
            'text-zinc-200" motion-preset-blur-right ml-5 flex w-full max-w-[680px] items-center gap-x-5 rounded-full border px-10 py-3',
            (index === 1 || index === 3) && 'ml-[51px]',
            (index === 0 || index === 4) && 'ml-[152px]',
            index === 0 && 'motion-delay-75',
            index === 1 && 'motion-delay-150',
            index === 2 && 'motion-delay-300',
            index === 3 && 'motion-delay-500',
            index === 4 && 'motion-delay-700',
          )}
        >
          <div className="border-r-[1.3px] py-3.5 pr-5">
            <Icon type={stage.type as StageType} width={49} height={49} />
          </div>

          <div className="space-y-2">
            <Typography variant="h3" className="text-sm uppercase">
              {stage.title}
            </Typography>
            <Typography className="!text-xs">{stage.description}</Typography>
          </div>
        </li>
      ))}
    </ul>
  );
};
