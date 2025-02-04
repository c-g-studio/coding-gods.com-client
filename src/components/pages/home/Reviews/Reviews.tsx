import React, {FC} from "react";
import {Typography} from "@/components/ui/Typography/Typography";
import {Section} from "@/components/shared/Section/Section";
import {ReviewsList} from "@/components/pages/home/Reviews/components/ReviewsList/ReviewsList";

export const Reviews: FC = (): React.JSX.Element => {
  return <Section className="overflow-hidden lg:overflow-visible">
    <Typography variant="h2" className="text-center ">
      Відгуки
    </Typography>
    <ReviewsList/>
  </Section>
}
