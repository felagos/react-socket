import { createContext, useState } from "react";

interface IUiContext {
    isHidden: boolean;
    showMenu: () => void;
    hideMenu: () => void;
}

const defaultValue = {
    isHidden: false,
    showMenu: () => {},
    hideMenu: () => {}
};

export const UiContext = createContext<IUiContext>(defaultValue);

export const UiProvider: React.FC = ({ children }) => {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const showMenu = () => {
        setIsHidden(false);
    }

    const hideMenu = () => {
        setIsHidden(true);
    }

    const value = { isHidden, setIsHidden, showMenu, hideMenu };

    return (
        <UiContext.Provider value={value}>
            {children}
        </UiContext.Provider>
    );
}