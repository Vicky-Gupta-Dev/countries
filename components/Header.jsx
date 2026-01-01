import { useTheme } from "../Hooks/useTheme";

export default function Header() {

    const [isDark, setIsMode] = useTheme()


  // if(isDark){
    // document.body.classList.add('dark')
  // } else {
    // document.body.classList.remove("dark");
  // }
  // console.log(); 

  return (
    <header className={`header-container ${isDark ? 'dark' : ''} `}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the worlds?</a>
        </h2>
        <p className="theme-changer" onClick={() => {
          setIsMode(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }}>
          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
          &nbsp;&nbsp;{isDark? "Light" : "Dark"} mode
        </p>
      </div>
    </header>
  )
}
