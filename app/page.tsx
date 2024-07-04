import {Avatar} from "flowbite-react";
import LogoCarousel from "@/app/components/languagecarousel";
import FrameworkCarousel from "@/app/components/frameworkcarousel";
import CareerTimeline from "@/app/components/careertimeline";

export default function Home() {
  return (
      <div className="flex flex-wrap">

          <Avatar
              className="mt-16 flex-none"
              placeholderInitials="KC"
              alt="avatar of Kelvin"
              size="xl"
              rounded>

              <div className="text-[32px] font-semibold uppercase text-gray-700">Kelvin Cheong</div>
              <div className="text-[48px] font-semibold uppercase text-gray-700">Senior Software Engineer</div>
          </Avatar>

          <div className="mt-8 text-xl font-normal text-gray-700">
              8 years in full stack and mobile development, including significant roles at Google and Fitbit.
              Proven track record in driving successful product launches and experience in major acquisitions:
              Doki {'>'} Fitbit {'>'} Google.
          </div>

          <div
              className="mt-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
              <LogoCarousel/>
          </div>

          <div
              className="mt-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
              <FrameworkCarousel/>
          </div>

          <div className="mt-8 mb-16">
              <CareerTimeline/>
          </div>
      </div>
  );
}
