import {
    CustomFlowbiteTheme, theme,
    Timeline, TimelineBody, TimelineContent,
    TimelineItem,
    TimelinePoint, TimelineTime, TimelineTitle
} from "flowbite-react";

const customTimelineTheme: CustomFlowbiteTheme["timeline"] = {
    root: {
        "direction": {
            "vertical": "relative border-l border-gray-300 dark:border-gray-700"
        }
    },
    item: {
        point: {
            "line": "hidden h-10 w-full bg-black dark:bg-black sm:flex",
            "marker": {
                "base": {
                    "vertical": "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300"
                },
            }
        },
        content: {
            "time": {
                "base": "mb-1 text-sm font-normal leading-none text-gray-400"
            },
            "title": {
                "base": "text-lg font-semibold text-gray-600"
            },
            "body": {
                "base": "mb-4 text-base font-normal text-gray-500"
            },
        }
    },
};

export default function CareerTimeline() {
    return (
        <Timeline theme={customTimelineTheme}>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>May 2023 - May 2024</TimelineTime>
                    <TimelineTitle>System Analyst @ United Asia</TimelineTitle>
                    <TimelineBody>
                        Developed and maintained iOS and Android apps (ReactNative, Flutter), frontend (Next.js), backend (SpringBoot) and internal loan system (SpringBoot).
                        Maintained lending and credit card (MasterCard) system.
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>Feb 2021 - May 2023</TimelineTime>
                    <TimelineTitle>Software Engineer @ Google</TimelineTitle>
                    <TimelineBody>
                        Developed and maintained the Fitbit service and the Clock (Alarm, Timer, Stopwatch) app in the Google Pixel Watch I and II.
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>Oct 2019 - Feb 2021</TimelineTime>
                    <TimelineTitle>Software Engineer @ Fitbit</TimelineTitle>
                    <TimelineBody>
                        Developed and maintained Android and iOS apps (Native) and backend (Go, GraphQL) for a unreleased wearable product for kids and elders.
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>May 2019 - Oct 2019</TimelineTime>
                    <TimelineTitle>Software Developer @ Doki</TimelineTitle>
                    <TimelineBody>
                        Develop and maintained an Android based kids smart watch, which provided video call, geo fencing and fitness features.
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>May 2018 - Oct 2019</TimelineTime>
                    <TimelineTitle>Mobile App Developer @ Digisalad</TimelineTitle>
                    <TimelineBody>
                        Developed and maintained Android and iOS apps (Native, React Native), frontend (Laravel) and backend (Laravel).
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>May 2019 - Oct 2019</TimelineTime>
                    <TimelineTitle>Junior Programmer @ KanHan</TimelineTitle>
                    <TimelineBody>
                        Developed and maintained Android and iOS apps (Native, React Native), backend (PHP) for departments of Hong Kong government and NGOs.
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                    <TimelineTime>Sep 2014 - Jun 2016</TimelineTime>
                    <TimelineTitle>Hong Kong Institute of Vocational Education</TimelineTitle>
                    <TimelineBody>
                        Higher Diploma in Cloud and Data Centre Administration
                    </TimelineBody>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
