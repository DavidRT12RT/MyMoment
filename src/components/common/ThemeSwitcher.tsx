"use client"

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

import { BsSunFill as BsSunFillIcon,BsMoonFill as BsMoonFillIcon} from "react-icons/bs";

export default function ThemeSwitcher(){


    const [ mounted, setMounted ] = useState(false);
    const { theme,setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    },[]);


    if(!mounted) return null;

    const handleChangeTheme = (e:any) => {

        if(theme === "dark") setTheme("light");
        else setTheme("dark");

    }

    return (
        <Button isIconOnly onClick={handleChangeTheme}>
            {theme === "light" ? <BsMoonFillIcon/> : <BsSunFillIcon/>}
        </Button>
    );

}