import Image from "next/image";
import React, {FC} from "react";

type AvatarBlockTypes = {
  imgPath: string
}
export const AvatarBlock: FC<AvatarBlockTypes> = ({imgPath}): React.JSX.Element => {
  return <div
    className="mb-4 md:mb-0 relative bg-ellipse-pattern bg-center bg-cover w-[80px] h-[80px] overflow-hidden rounded-[50%] flex items-center justify-center mx-auto md:ml-0 md:mr-[89px] md:absolute md:top-6 md:left-8">
    {imgPath ?
      <Image src={imgPath} alt="Зобарження користувача" width={800} height={800} loading="lazy"
             className="object-cover w-full h-full"/>
      :
      <Image src="/images/reviews/user-thin.svg" alt="Зобарження користувача" width={800} height={800}
             loading="lazy" className={`w-[80px] h-[80px]`}/>
    }
  </div>
}
