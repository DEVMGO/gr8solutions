import React, { Fragment } from "react";
import Head from "next/head";
// Icons
import AlarmIcon from "@/components/ui/icons/alarmIcon";
import CalendarIcon from "@/components/ui/icons/calendarIcon";
import EmailIcon from "@/components/ui/icons/emailIcon";
import LocationIcon from "@/components/ui/icons/locationIcon";
import PhoneIcon from "@/components/ui/icons/phoneIcon";
import FormContactUS from "@/components/kontakta_oss/formContactUS";

const Kontakta_Oss = () => {
  return (
    <Fragment>
      <Head>
        <title>GR8 | KONTAKTA OSS</title>
      </Head>
      <div className="w-full flex items-stretch justify-between xl:flex-row flex-col 3xl:mt-28 md:mt-16 mt-12 3xl:gap-24 md:gap-16 gap-12">
        <div className="w-full h-auto flex items-start justify-between flex-col lg:order-1 order-2">
          <h3 className="3xl:text-[7.5rem] text-8xl font-bold text-black lg:block hidden">
            KONTAKTA OSS
          </h3>
          <div className="flex items-start justify-end flex-col 3xl:mt-44 lg:mt-24 mt-0">
            <div className="flex items-start justify-end flex-col 3xl:mt-9 mt-7">
              <h3 className="3xl:text-2xl md:text-xl text-lg font-medium text-black">
                KONTAKTA OSS
              </h3>
              <p className="3xl:text-2xl md:text-xl text-lg font-light text-gray80 my-4 lg:block hidden">
                Din dedikerade partner som levererar inom IT- &
                telefonitjänster. Kontakta oss idag!
              </p>

              <div className="flex items-start justify-center flex-col">
                <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                  <PhoneIcon className="[&>path]:stroke-black" />
                  <p className="3xl:text-2xl md:text-xl text-lg font-light text-black">
                    020-10 38 10
                  </p>
                </div>
                <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                  <EmailIcon className="[&>path]:stroke-black" />
                  <p className="3xl:text-2xl md:text-xl text-lg font-light text-black">
                    info@gr8solutions.se
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-end flex-col 3xl:mt-9 mt-7">
              <h3 className="3xl:text-2xl md:text-xl text-lg font-medium text-black mb-4">
                Våra öppettider
              </h3>
              <div className="w-full flex items-start justify-center flex-col 3xl:gap-3 gap-2">
                <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                  <CalendarIcon className="[&>path]:stroke-black" />
                  <p className="3xl:text-2xl md:text-xl text-lg font-light text-black">
                    Måndag - Fredag
                  </p>
                </div>
                <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                  <AlarmIcon className="[&>path]:stroke-black" />
                  <p className="3xl:text-2xl md:text-xl text-lg font-light text-black">
                    09.00 - 16.30
                  </p>
                </div>
                <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                  <LocationIcon className="[&>path]:stroke-black" />
                  <p className="3xl:text-2xl md:text-xl text-base font-light text-black">
                    Terminalgatan 20, 235 39 Vellinge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-start justify-start flex-col lg:order-2 order-1">
          <p className="3xl:text-2xl md:text-xl text-lg font-light text-gray80 mb-12 lg:hidden block">
            Din dedikerade partner som levererar inom IT- & telefonitjänster.
            Kontakta oss idag!
          </p>
          <FormContactUS />
        </div>
      </div>
    </Fragment>
  );
};

export default Kontakta_Oss;

Kontakta_Oss.layout = "L1";
