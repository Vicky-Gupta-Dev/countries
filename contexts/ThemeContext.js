import {createContext, useState } from "react";


export const ThemeContext = createContext()


export function ThemeProvider ({ children }) {
  const [isDark, setIsMode] = useState(JSON.parse(localStorage.getItem("isDarkMode"))
  )
  return (
     <ThemeContext.Provider value={[isDark, setIsMode]}>
    {children}
  </ThemeContext.Provider>
  )
}

// console.log(ThemeContext)