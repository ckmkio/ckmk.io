import {Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import Link from "next/link";

export default function MyNavbar() {
    return (
        <Navbar className="bg-slate-800">
            <NavbarBrand>
                <span className="whitespace-nowrap text-xl text-gray-300">ckmk.io</span>
            </NavbarBrand>
            <NavbarToggle className="mr-3 h-6 sm:h-9" />
            <NavbarCollapse>
                <NavbarLink className="text-gray-300" as={Link} href="/">About me</NavbarLink>
                <NavbarLink className="text-gray-300" as={Link} href="/projects">Projects</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
