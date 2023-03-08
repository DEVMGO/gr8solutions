import React from "react";
import Image from "next/image";
// Components
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import ButtonWhite from "@/components/ui/buttons/buttonWhite";
// images
import Img from "@/public/assets/images/home/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="w-full flex items-stretch justify-between mt-52">
      <div className="w-1/2 h-auto flex items-start justify-start flex-col">
        <div className="3xl:w-[46.8rem] w-[34.8rem] 3xl:h-[43rem] h-[31rem] rounded-[24px] overflow-hidden">
          <Image
            src={Img}
            alt="gr8-solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-1/2 h-auto flex items-start justify-between flex-col">
        <h1 className="3xl:text-9xl text-7xl font-bold text-black">OM OSS</h1>
        <p className="max-w-[40rem] 3xl:text-2xl text-lg font-light text-gray80">
          På GR8 Solutions är vi mer än bara en återförsäljare av
          telekomlösningar och IT. Vi vet att kommunikation och teknologi är
          avgörande för att skapa en framgångsrik verksamhet. Så vi strävar
          efter att erbjuda det senaste och bästa inom telefoni och IT-tjänster.
          Vi är här för att hjälpa dig att hålla ditt företag uppkopplat och
          kommunicera effektivt, så du kan fokusera på att göra det du gör bäst
          - att driva ditt företag.
        </p>

        <ButtonBlack className="3xl:max-w-[14.8rem] max-w-[11rem] 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm">
          KONTAKTA OSS
        </ButtonBlack>
      </div>
    </div>
  );
};

export default AboutUs;
