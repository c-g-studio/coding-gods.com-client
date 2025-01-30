import React, { FC, MouseEventHandler } from 'react';
import { Icon } from '@/components/ui/Icon/Icon';
import { Typography } from '@/components/ui/Typography/Typography';
import { useTranslate } from '@tolgee/react';
import { GradientLine } from '@/components/shared/GradientLine/GradientLine';

type SuccessModalProps = {
  isOpen: boolean;
  modalToggler: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};

export const SuccessModal: FC<SuccessModalProps> = ({
  isOpen,
  modalToggler,
}) => {
  const { t } = useTranslate();
  return (
    <div
      onClick={modalToggler}
      className={
        isOpen
          ? 'z-70 visible fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[rgba(10,10,10,0.8)] opacity-100 backdrop-blur-[27px]'
          : 'invisible fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[rgba(10,10,10,0.8)] opacity-0 backdrop-blur-[27px]'
      }
    >
      <div className="relative w-[288px] rounded-3xl border border-[rgba(255,255,255,0.05)] bg-background px-6 py-8 md:w-[592px]">
        <GradientLine
          positionY={'-top-[1px]'}
          width={'w-[236px] md:w-[540px]'}
          left={'left-[26px]'}
        />
        <div className="flex flex-col items-center gap-8">
          <Icon type={'iconSuccess'} width={58} height={58} />
          <Typography variant="h3">
            {t('home.common.successModal.title')}
          </Typography>
          <Typography variant="p" className="text-center">
            {t('home.common.successModal.text')}&nbsp;
            <a href={'tel:+123456789098'} className="text-orange-450">
              +12(345)6789098
            </a>
            .
          </Typography>
          <button
            onClick={modalToggler}
            className="h-[40px] w-full rounded-[40px] bg-orange-450 text-[12px] text-zinc-950 md:w-[184px]"
          >
            {t('home.common.modal.closeBtn')}
          </button>
        </div>
        <GradientLine
          positionY={'-bottom-[1px]'}
          width={'w-[236px] md:w-[540px]'}
          left={'left-[26px]'}
        />
      </div>
    </div>
  );
};
