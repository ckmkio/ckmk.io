import { Avatar } from "flowbite-react";
import LogoCarousel from "@/app/components/languagecarousel";
import FrameworkCarousel from "@/app/components/frameworkcarousel";
import CareerTimeline from "@/app/components/careertimeline";

export default function Home() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center sm:items-start">
                <div className="flex flex-col items-center sm:flex-row sm:items-center mt-16 sm:mt-8 md:mt-12">
                    <Avatar
                        className="flex-none mb-4 sm:mb-0 sm:mr-4"
                        placeholderInitials="KC"
                        alt="avatar of Kelvin"
                        size="xl"
                        rounded
                    />
                    <div className="text-center sm:text-left">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold uppercase text-gray-700">
                            Kelvin Cheong
                        </div>
                        <div className="text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-semibold uppercase text-gray-700">
                            Senior Software Engineer
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-base sm:text-lg md:text-xl font-normal text-gray-700">
                    8 years in full stack and mobile development, including significant roles at Google and Fitbit.
                    Proven track record in driving successful product launches and experience in major acquisitions:
                    Doki {'>'} Fitbit {'>'} Google.
                </div>

                <div className="w-full mt-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
                    <LogoCarousel />
                </div>

                <div className="w-full mt-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)]">
                    <FrameworkCarousel />
                </div>

                <div className="w-full mt-8 mb-16">
                    <CareerTimeline />
                </div>
            </div>
        </div>
    );
}