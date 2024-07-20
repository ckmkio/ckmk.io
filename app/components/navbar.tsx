import {Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import Link from "next/link";
import GithubIcon from "react-devicons/github/original";
import LinkedInIcon from "react-devicons/linkedin/plain";

export default function MyNavbar() {
    return (
        <Navbar className="bg-black">
            <NavbarToggle className="mr-3 h-6 sm:h-9"/>
            <NavbarCollapse className="center">
                <NavbarLink className="text-gray-300" as={Link} href="/">Home</NavbarLink>
                {/*<NavbarLink className="text-gray-300" as={Link} href="/projects">Projects</NavbarLink>*/}
            </NavbarCollapse>
            <div className="flex flex-wrap">
                <Button className="bg-black" as={Link} href="https://github.com/ckmkio">
                    <GithubIcon size="2em" color="white"/>
                </Button>
                <Button className="bg-black" as={Link} href="https://www.linkedin.com/in/ckmkio/">
                    <LinkedInIcon size="2em" color="white"/>
                </Button>
            </div>
        </Navbar>
);
}
