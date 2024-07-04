import AndroidStudioIcon from "react-devicons/androidstudio/plain-wordmark";
import XcodeIcon from "react-devicons/xcode/plain";
import FlutterIcon from "react-devicons/flutter/plain";
import ReactIcon from "react-devicons/react/original-wordmark";
import ReduxIcon from "react-devicons/redux/original";
import NodeJsIcon from "react-devicons/nodejs/plain-wordmark";
import NextJsIcon from "react-devicons/nextjs/original-wordmark";
import SpringIcon from "react-devicons/spring/original-wordmark";
import LaravelIcon from "react-devicons/laravel/original-wordmark";
import GraphQlIcon from "react-devicons/graphql/plain-wordmark";
import MySqlIcon from "react-devicons/mysql/plain-wordmark";
import MongoDbIcon from "react-devicons/mongodb/plain-wordmark";
import PostgreSqlIcon from "react-devicons/postgresql/plain-wordmark";

export default function Frameworkcarousel() {

    const color = "#9ca3af"
    const size = "4em"

    const logos = [
        {src: <AndroidStudioIcon color={color} size={size}/>},
        {src: <XcodeIcon color={color} size={size}/>},
        {src: <FlutterIcon color={color} size={size}/>},
        {src: <ReactIcon color={color} size={size}/>},
        {src: <ReduxIcon color={color} size={size}/>},
        {src: <NodeJsIcon color={color} size={size}/>},
        {src: <NextJsIcon color={color} size={size}/>},
        {src: <SpringIcon color={color} size={size}/>},
        {src: <LaravelIcon color={color} size={size}/>},
        {src: <GraphQlIcon color={color} size={size}/>},
        {src: <MySqlIcon color={color} size={size}/>},
        {src: <MongoDbIcon color={color} size={size}/>},
        {src: <PostgreSqlIcon color={color} size={size}/>},
    ]

    return (
        <div
            className="w-full inline-flex flex-nowrap">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse">
                {logos.map((logo, index) => (
                    <li key={index}>
                        {logo.src}
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-reverse" aria-hidden="true">
                {logos.map((logo, index) => (
                    <li key={index}>
                        {logo.src}
                    </li>
                ))}
            </ul>
        </div>
    )
}