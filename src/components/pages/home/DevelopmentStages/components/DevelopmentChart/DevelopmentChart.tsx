import { FC } from 'react';

import { Typography } from '@/components/ui/Typography/Typography';

export const DevelopmentChart: FC = () => {
  return (
    <div className="motion-preset-expand relative inline-flex size-[210px] shrink-0 items-center justify-center motion-delay-75">
      <div className="relative z-10 inline-flex size-[154px] items-center justify-center rounded-full bg-zinc-200 motion-delay-100">
        <Typography className="motion-preset-fade uppercase text-zinc-950 motion-duration-300">
          Етапи розробки
        </Typography>
      </div>

      <div
        className="motion-preset-compress absolute -z-10 size-[172px] rotate-[30deg] rounded-full motion-delay-75"
        style={{
          background: `conic-gradient(#0A0A0A 0% 12.5%, #0A0A0A 12.5% 25%, #0A0A0A 25% 37.5%, #000000 37.5% 50%, #676767 50% 62.5%, #676767DD 62.5% 75%, #676767 75% 87.5%, #cdcdcd 87.5% 100% )`,
        }}
      />
    </div>
  );
};
