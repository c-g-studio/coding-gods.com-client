import {Typography} from "@/components/ui/Typography/Typography";
import s from "./style.module.css";
import Image from "next/image";
import React, {FC} from "react";

type InfoBlockTypes = {
  review: string,
  title: string,
  source: string,
  icon: string
}

export const InfoBlock: FC<InfoBlockTypes> = ({
                                                review,
                                                title,
                                                source,
                                                icon
                                              }): React.JSX.Element => {
  return <div className="flex-grow flex flex-col justify-between md:justify-center md:w-[70%]">
    <Typography variant="p"
                className={`relative mb-4 text-[10px]/[1.8] h-max max-h-[70px] md:max-h-[87px] overflow-y-auto ${s.customScrollbar}`}>
      {review}
    </Typography>
    <div>
      <Typography variant="h3" className="mb-4 text-2xl/[1.71]">
        {title}
      </Typography>
      <div className="flex gap-2 mt-auto">
        <Typography variant="p" className="text-[10px]/[1.8]">
          {source}
        </Typography>
        <Image src={icon} alt="Зобарження Користувача" width={20} height={20} loading="lazy"/>
      </div>
    </div>
  </div>
}
