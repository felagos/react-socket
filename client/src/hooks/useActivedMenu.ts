import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const useActivedMenu = () => {
    const location = useLocation();
    const [activedMenu, setActivedMenu] = useState<string[]>(["1"]);

    useEffect(() => {
        const { pathname } = location;

        if(pathname === "/sign-in") setActivedMenu(["1"]);
        if(pathname === "/queue") setActivedMenu(["2"]);
        if(pathname === "/create-ticket") setActivedMenu(["3"]);
        if(pathname === "/desktop") setActivedMenu(["4"]);

    }, [location]);

    return { activedMenu };
}