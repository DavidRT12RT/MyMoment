"use client";

import { Button } from "@nextui-org/react";
import { InteractionsType } from "@/interfaces/posts.interface";

//Icons
import {  AiOutlineHeart ,AiFillHeart,AiOutlineFile,AiFillFile,AiOutlineShareAlt } from "react-icons/ai";
import { FaComments } from "react-icons/fa";


export default function InteractionsBox(
    {interactions}:{interactions:InteractionsType}
){


    return (
        <ul className="interactionsBox">
            <li>
                <Button isIconOnly size="md">
                    <AiOutlineHeart/>
                </Button>
                <p className="font-semi-bold text-gray-250">{interactions.likes}</p>
            </li>
            <li>
                <Button isIconOnly size="md">
                    <FaComments/> 
                </Button>
                <p className="font-semi-bold text-gray-250">{interactions.comments}</p>
            </li>
            <li>
                <Button isIconOnly size="md">
                    <AiOutlineFile/>
                </Button>
                <p className="font-semi-bold text-gray-250">{interactions.saves}</p>
            </li>
            <li>
                <Button isIconOnly size="md">
                    <AiOutlineShareAlt/>
                </Button>
                <p className="font-semi-bold text-gray-250">{interactions.shares}</p>
            </li>
        </ul>
    );

}