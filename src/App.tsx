import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import Header from "./assets/components/header/Header"
import Card from "./assets/components/main/content/Card"
import Main from "./assets/components/main/Main"
import Section from "./assets/components/main/Section"


function App() {

  return (

    <div className="w-screen h-screen bg-slate-950 text-white font-mono overflow-x-hidden scroll-smooth">
      <Header />
      <div className="mt-20 h-1/3 pl-4 flex items-center">
        <h1 className="text-4xl font-mono font-bold w-3/5 max-[640px]:text-2xl">{"<JaveiroCosmico> Olá,eu sou Vitorio, futuro desenvolvedor < /JaveiroCosmico>"}</h1>
      </div>
      <Main />
      <Card />
      <Section />
      <footer className=" h-52 w-full flex-col" id="redes">
        <div className="h-1/2 w-full flex items-center justify-center">
          <h1 className="text-2xl ">Me segue</h1>
        </div>
        <div className=" m-auto w-1/2 h-1/2 grid gap-1 grid-cols-3 items-start place-items-center text-3xl">
          <a href="">
            <SiLinkedin></SiLinkedin>
          </a>
          <a href="">
            <SiInstagram></SiInstagram>
          </a>
          <a href="">
            <SiGithub></SiGithub>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
