import JavaIcon from "react-devicons/java/plain-wordmark";
import KotlinIcon from "react-devicons/kotlin/plain-wordmark";
import ObjectiveCIcon from "react-devicons/objectivec/plain";
import SwiftIcon from "react-devicons/swift/plain-wordmark";
import DartIcon from "react-devicons/dart/plain-wordmark";
import GoIcon from "react-devicons/go/original-wordmark";
import PhpIcon from "react-devicons/php/plain";
import JavaScriptIcon from "react-devicons/javascript/plain";
import TypeScriptIcon from "react-devicons/typescript/plain";
import Html5Icon from "react-devicons/html5/plain-wordmark";
import Css3Icon from "react-devicons/css3/plain-wordmark";
import SassIcon from "react-devicons/sass/original";
import TailwindCssIcon from "react-devicons/tailwindcss/plain-wordmark";

export default function LogoCarousel() {

    const color = "#9ca3af"
    const size = "4em"

    const logos = [
        {src: <JavaIcon color={color} size={size}/>},
        {src: <KotlinIcon color={color} size={size}/>},
        {src: <ObjectiveCIcon color={color} size={size}/>},
        {src: <SwiftIcon color={color} size={size}/>},
        {src: <DartIcon color={color} size={size}/>},
        {src: <GoIcon color={color} size={size}/>},
        {src: <PhpIcon color={color} size={size}/>},
        {src: <JavaScriptIcon color={color} size={size}/>},
        {src: <TypeScriptIcon color={color} size={size}/>},
        {src: <Html5Icon color={color} size={size}/>},
        {src: <Css3Icon color={color} size={size}/>},
        {src: <SassIcon color={color} size={size}/>},
        {src: <TailwindCssIcon color={color} size={size}/>},
    ]

    return (
        <div
            className="w-full inline-flex flex-nowrap">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index) => (
                    <li key={index}>
                        {logo.src}
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {logos.map((logo, index) => (
                    <li key={index}>
                        {logo.src}
                    </li>
                ))}
            </ul>
        </div>
    )
}