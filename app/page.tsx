import {Avatar, Blockquote, HR} from "flowbite-react";
import Image from "next/image";
import LogoCarousel from "@/app/components/languagecarousel";
import FrameworkCarousel from "@/app/components/frameworkcarousel";

export default function Home() {
  return (
      <div className="flex flex-wrap">
          <div className="mt-20 flex space-x-12">
              <div className="text-white grow">
                  <div className="text-white text-[48px] font-semibold uppercase">Kelvin Cheong</div>
                  <div className="text-white text-[48px] font-semibold uppercase">Senior Software Enginner
                  </div>
                  <div className="text-white text-2xl font-normal capitalize">
                      8 years in full stack and mobile development, including significant roles at Google and Fitbit.
                      Proven track record in driving successful product launches and experience in major acquisitions:
                      Doki {'>'} Fitbit {'>'} Google.
                  </div>
              </div>
              <Avatar
                  className="flex-none w-[30%] h-[30%] "
                  placeholderInitials="KC"
                  alt="avatar of Kelvin"
                  size="xl"
                  rounded/>
          </div>

          <div className='mt-20'>
              <LogoCarousel/>
              <FrameworkCarousel/>
          </div>

      </div>
  );
}
