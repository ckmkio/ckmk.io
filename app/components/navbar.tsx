import {Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import Link from "next/link";

export default function MyNavbar() {
    return (
        <Navbar className="bg-black">
            <NavbarBrand>
                <span className="whitespace-nowrap text-xl font-semibold text-whtie">Kelvin Cheong&#39;s Portfolio</span>
            </NavbarBrand>
            <NavbarToggle className="mr-3 h-6 sm:h-9" />
            <NavbarCollapse>
                <NavbarLink className="text-white" as={Link} href="/home">About me</NavbarLink>
                <NavbarLink className="text-white" as={Link} href="/projects">Projects</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
