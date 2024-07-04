import Image from 'next/image'
import Java from '@/public/icon-languages/java.svg'
import Kotlin from '@/public/icon-languages/kotlin.svg'
import ObjectiveC from '@/public/icon-languages/objectivec.svg'
import Swift from '@/public/icon-languages/swift.svg'
import Dart from '@/public/icon-languages/dart.svg'
import Go from '@/public/icon-languages/go.svg'
import JavaScript from '@/public/icon-languages/javascript.svg'
import TypeScript from '@/public/icon-languages/typescript.svg'
import PHP from '@/public/icon-languages/php.svg'
import HTML5 from '@/public/icon-languages/html5.svg'
import CSS3 from '@/public/icon-languages/css3.svg'
import SASS from '@/public/icon-languages/sass.svg'
import TailwindCSS from '@/public/icon-languages/tailwindcss.svg'

import JavaOriginalIcon from "react-devicons/java/plain";

export default function LogoCarousel() {

    const logos = [
        {
            alt: 'Java', src: Java
        },
        {
            alt: 'Kotlin', src: Kotlin
        },
        {
            alt: 'Objective-C', src: ObjectiveC
        },
        {
            alt: 'Swift', src: Swift
        },
        {
            alt: 'Dart', src: Dart
        },
        {
            alt: 'Go', src: Go
        },
        {
            alt: 'JavaScript', src: JavaScript
        },
        {
            alt: 'TypeScript', src: TypeScript
        },
        {
            alt: 'PHP', src: PHP
        },
        {
            alt: 'HTML5', src: HTML5
        },
        {
            alt: 'CSS3', src: CSS3
        },
        {
            alt: 'SASS', src: SASS
        },
        {
            alt: 'Tailwind CSS', src: TailwindCSS
        },
    ]

    return (
        <div
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index) => (
                    <li key={index}>
                        {/*<Image  src={logo.src} alt={logo.alt} />*/}
                        <JavaOriginalIcon color="white"/>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {logos.map((logo, index) => (
                    <li key={index}>
                        {/*<Image src={logo.src} alt={logo.alt} />*/}
                        <JavaOriginalIcon color="white"/>
                    </li>
                ))}
            </ul>
        </div>
    )
}