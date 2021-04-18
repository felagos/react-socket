import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContenxt";

export const useHideMenu = (hide: boolean) => {
    const { showMenu, hideMenu } = useContext(UiContext);

    useEffect(() => {
        if (hide) hideMenu();
        else showMenu();
    }, [hide, hideMenu, showMenu]);

}