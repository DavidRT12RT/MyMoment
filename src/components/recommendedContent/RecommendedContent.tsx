"use client";
import { Button } from "@nextui-org/react";

import { BiHome,BiWorld } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import {  AiOutlineCamera } from "react-icons/ai";

export default function RecommendedContent(){
    return (
        <section className="hidden lg:flex flex-col gap-5 h-full col-span-1 p-2">
            <ul className="flex flex-col gap-4 py-5">
                <li className="flex items-center gap-1 text-xl">
                    <BiHome/> 
                    <h3 className="font-semibold">For you</h3>
                </li>
                <li className="flex items-center gap-1 text-xl">
                    <FaUsers/>
                    <h3 className="font-semibold">Following</h3>
                </li>
                <li className="flex items-center gap-1 text-xl">
                    <BiWorld/>
                    <h3 className="font-semibold">Discover</h3>
                </li>
                <li className="flex items-center gap-1 text-xl">
                    <AiOutlineCamera/>
                    <h3 className="font-semibold">LIVE</h3>
                </li>
            </ul>
            <hr/>
            <div className="flex flex-col gap-4 py-5">
                <p className="text-gray-500">Log in to follow creators , give like to videos and see comments </p>
                <Button color="primary" className="text-white">Login</Button>
            </div>
            <hr/>
        </section>
    )
}