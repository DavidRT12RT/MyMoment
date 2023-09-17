"use client";

import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { BsSearch,BsThreeDotsVertical } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import InputLadingPage from "./InputLadingPage";

export default function Navbar(){

    return (
        <header className="w-screen">
            <nav className="p-5 border-b flex items-center justify-between gap-3">
                <ul className="basis-1/4">
                    <li>
                        <Link href={`/`}>
                            <h1 className="font-bold md:text-2xl">
                                MyMoment
                            </h1>
                        </Link>
                    </li>
                </ul>
                <div className="basis-1/2">
                    <InputLadingPage/>
                </div>
                <ul className="flex basis-1/4 gap-2 items-center justify-end">
                    <li>
                        <Button color="primary" startContent={<RiAddFill className="text-white"/>}>
                            <Link href={`/upload`} className="text-white">Cargar</Link>
                        </Button>
                    </li>
                    <li>
                        <ThemeSwitcher/>
                    </li>
                </ul>
            </nav>
        </header>
    );

}