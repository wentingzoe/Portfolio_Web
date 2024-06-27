import React, { createContext, useContext, useState } from "react";

const NavContext = createContext(null);

export const useNav = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<NavContext.Provider value={{ isActive, setIsActive }}>
			{children}
		</NavContext.Provider>
	);
};
