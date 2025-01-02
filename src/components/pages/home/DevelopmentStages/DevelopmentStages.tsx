import { Icon } from '@/components/ui/Icon/Icon';
import { FC } from 'react';

import { Section } from '@/components/shared/Section/Section';
import { Typography } from '@/components/ui/Typography/Typography';

import data from './data.json';

export const DevelopmentStages: FC = () => {
  // width="49" height="49"
  return (
    <Section>
      <Typography className="text-center" variant="h2">
        Етапи розробки
      </Typography>

      <div>
        {/*List of development stages*/}
        <div>
          <ul>
            {data.map(stage => (
              <li key={stage.type} className="text">
                <Icon type={stage.type} width={49} height={49} />
                <Typography variant="h3">{stage.title}</Typography>
                <Typography>{stage.description}</Typography>
              </li>
            ))}
          </ul>
        </div>

        {/*Decor*/}
        <div></div>

        {/*Subtitle*/}
        <div></div>
      </div>
    </Section>
  );
};
