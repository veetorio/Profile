import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import Header from "./assets/components/header/Header"
import Card from "./assets/components/main/content/Card"
import Main from "./assets/components/main/Main"
import Section from "./assets/components/main/Section"
import style from './assets/components/main/title/Motion.module.css'


function App() {

  return (

    <div className="w-screen h-screen bg-slate-950 text-white font-mono overflow-x-hidden scroll-smooth">
      <Header />
      <div className="mt-20 py-16 px-3 flex-col items-center justify-end">
        <h1 className={`w-full ${style.click}`}>Ola meu nome é ettore</h1>
        <h1 className={`w-full ${style.click}`}>Futuro desenvolvedor FullStack</h1>
        <hr className="w-1/2 border-2 rounded-r-xl border-indigo-600 animate-pulse max-[640px]:w-72"/>
      </div>
      <Main />
      <Card />
      <Section />
      <footer className=" h-52 w-full flex-col" id="redes">
        <div className="h-1/2 w-full flex items-center justify-center">
          <h1 className="text-2xl ">Me segue</h1>
        </div>
        <div className=" m-auto w-1/2 h-1/2 grid gap-1 grid-cols-3 items-start place-items-center text-3xl">
          <a href="/linke">
            <SiLinkedin></SiLinkedin>
          </a>
          <a href="/insta">
            <SiInstagram></SiInstagram>
          </a>
          <a href="/git">
            <SiGithub></SiGithub>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
