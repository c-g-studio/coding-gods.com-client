// @flow
import React, { FC, MouseEventHandler } from 'react';
import { GradientLine } from '@/components/shared/GradientLine/GradientLine';
import { Icon } from '@/components/ui/Icon/Icon';
import { Typography } from '@/components/ui/Typography/Typography';
import { useTranslate } from '@tolgee/react';

type ErrorModalProps = {
  isError: boolean;
  modalToggler: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};
export const ErrorModal: FC<ErrorModalProps> = ({ isError, modalToggler }) => {
  const { t } = useTranslate();
  return (
    <div
      className={
        isError
          ? 'visible fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-[rgba(10,10,10,0.8)] opacity-100 backdrop-blur-[27px]'
          : 'invisible fixed left-0 top-0 flex h-full w-full items-center justify-center bg-[rgba(10,10,10,0.8)] opacity-0 backdrop-blur-[27px]'
      }
    >
      <div className="relative w-[288px] rounded-3xl border border-[rgba(255,255,255,0.05)] bg-background px-6 py-8 md:w-[592px]">
        <GradientLine
          className={'-top-[1px] left-[26px] w-[236px] md:w-[540px]'}
        />
        <div className="flex flex-col items-center gap-8">
          <Icon type={'iconError'} width={58} height={58} />
          <Typography variant="h3">
            {t('home.common.errorModal.title')}
          </Typography>
          <div className="text-center">
            <Typography variant="p">
              {t('home.common.errorModal.textFirst')}
            </Typography>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-1 rounded-3xl bg-foreground"></div>
              <Typography variant="p">
                {t('home.common.errorModal.liOne')}
              </Typography>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-1 rounded-3xl bg-foreground"></div>
              <Typography variant="p">
                {t('home.common.errorModal.liTwo')}
              </Typography>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-1 rounded-3xl bg-foreground"></div>
              <Typography variant="p">
                {t('home.common.errorModal.liThree')}
              </Typography>
            </div>
            <Typography variant="p">
              {t('home.common.errorModal.textLast')}
            </Typography>
            <a href={'tel:+123456789098'} className="text-orange-450">
              +12(345)6789098
            </a>
            .
          </div>
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={modalToggler}
              className="h-[40px] rounded-[40px] text-[12px] text-foreground"
            >
              {t('home.common.modal.closeBtn')}
            </button>
          </div>
        </div>
        <GradientLine
          className={'-bottom-[1px] left-[26px] w-[236px] md:w-[540px]'}
        />
      </div>
    </div>
  );
};
