import React, { Fragment } from "react";
import ButtonBlue from "../ui/buttons/buttonBlue";

const FormContactUS = () => {
  return (
    <Fragment>
      <form className="w-full h-full bg-lightblue rounded-[20px] 3xl:p-9 md:p-7 p-4">
        <div className="w-full flex items-center justify-center md:flex-row flex-col 3xl:gap-12 gap-7 mb-5">
          <div className="w-full flex items-start justify-center flex-col">
            <label className="md:text-lg text-base font-medium text-blueCF mb-1">
              Förnamn
            </label>
            <input
              type="text"
              placeholder="Förnamn"
              className="w-full 3xl:h-[4.5rem] h-12 3xl:rounded-[20px] rounded-2xl 3xl:p-6 p-3 bg-white md:text-lg text-base text-gray-900 outline-none"
            />
          </div>
          <div className="w-full flex items-start justify-center flex-col">
            <label className="md:text-lg text-base font-medium text-blueCF mb-1">
              Efternamn
            </label>
            <input
              type="text"
              placeholder="Efternamn"
              className="w-full 3xl:h-[4.5rem] h-12 3xl:rounded-[20px] rounded-2xl 3xl:p-6 p-3 bg-white md:text-lg text-base text-gray-900 outline-none"
            />
          </div>
        </div>
        <div className="w-full flex items-start justify-center flex-col mb-5">
          <label className="md:text-lg text-base font-medium text-blueCF mb-1">
            E-post
          </label>
          <input
            type="email"
            placeholder="Ditt@företag.com"
            className="w-full 3xl:h-[4.5rem] h-12 3xl:rounded-[20px] rounded-2xl 3xl:p-6 p-3 bg-white md:text-lg text-base text-gray-900 outline-none"
          />
        </div>
        <div className="w-full flex items-start justify-center flex-col mb-5">
          <label className="md:text-lg text-base font-medium text-blueCF mb-1">
            Telefonnummer
          </label>
          <input
            type="text"
            placeholder="+46 000 000000"
            className="w-full 3xl:h-[4.5rem] h-12 3xl:rounded-[20px] rounded-2xl 3xl:p-6 p-3 bg-white md:text-lg text-base text-gray-900 outline-none"
          />
        </div>
        <div className="w-full flex items-start justify-center flex-col mb-5">
          <label className="md:text-lg text-base font-medium text-blueCF mb-1">
            Meddelande
          </label>
          <textarea className="w-full h-44 3xl:rounded-[20px] rounded-2xl 3xl:p-6 p-3 bg-white md:text-lg text-base text-gray-900 outline-none" />
        </div>

        <div className="w-full flex items-center justify-start 3xl:gap-6 md:gap-5 gap-4">
          <input type="radio" className="w-6 h-6 border-none" />
          <label className="md:text-lg text-base font-medium text-blueCF">
            Du accepterar vår integritetspolicy.
          </label>
        </div>

        <ButtonBlue type="submit" className="3xl:h-[4.5rem] h-12 mt-6">SKICKA</ButtonBlue>
      </form>
    </Fragment>
  );
};

export default FormContactUS;
