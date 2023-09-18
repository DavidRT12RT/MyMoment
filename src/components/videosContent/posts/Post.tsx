"use client"

//Icons
import { Button } from "@nextui-org/react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

//Component's
import InteractionsBox from "./components/InteractionsBox";
import VideoBox from "./components/VideoBox";

//Interfaces
import { PostType } from "@/interfaces/posts.interface";

import "./post.css";


export default function Post({post}:{post:PostType}){
    return (
        <>
            <div className="postCard flex-none p-3 lg:p-5">
                <div className="postCardheader">
                    <img 
                        src={`https://t4.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.webp`} 
                        alt={"user-picture"}
                        className=""
                    />
                    <div className="description">
                        <h3 className="font-semibold">{post.user.userName} <span className="font-light">@{post.user.fullName}</span></h3>
                        <p>{post.description}</p>
                        <div className="tags">
                            {post?.tags && post.tags.map(tag => <span className="text-primary font-light">#{tag}</span>)}
                        </div>
                        <div className="mt-1">
                            {post?.song && <p className="font-light text-sm flex items-center gap-2"><BsMusicNoteBeamed/> {post.song.name} - {post.song.composer.fullName}</p>}
                            {post?.location && <p className="font-light text-sm flex items-center gap-2"><CiLocationOn/> {post.location.merchant} {post.location.city}</p>}
                        </div>
                    </div>
                    <Button color="primary" className="text-white">Follow</Button>
                </div>
                <div className="postCardbody">
                    <VideoBox/>
                    <InteractionsBox interactions={post.interactions}/>
                </div>
                <hr className="w-full"/>
            </div>
        </>
    )
}