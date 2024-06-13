import { FaJava, FaReact } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiSpring , SiGit, SiGithub } from "react-icons/si";
import { BackIcon } from "../../../Interfaces/Types";

import Bottom from "../../bottom/Bottom";
import Title from "../title/Title";

const icons_bg: BackIcon[] = [
  {
    wave: "waveJava",
    icon: <FaJava fontSize={32} className="group-hover:scale-150 transition ease-out delay-100 group-hover:fill-red-500"/>,
  },
  {
    wave: "waveReact",
    icon: <FaReact fontSize={32} className="group-hover:scale-150 transition ease-out delay-100 group-hover:fill-blue-400"/>,
  },
  {
    wave: "waveTypescript",
    icon: <SiTypescript fontSize={32}className="group-hover:scale-150 transition ease-out delay-100 group-hover:fill-blue-600" />,
  },
  {
    wave: "waveSpring",
    icon: <SiSpring fontSize={32} className="group-hover:scale-150 transition ease-out delay-100 group-hover:fill-green-600"/>,
  },
  {
    wave: "waveGit",
    icon: <SiGit fontSize={32} className="group-hover:scale-150 transition ease-out delay-100 group-hover:fill-orange-500"/>,
  },
  {
    wave: "waveGithub",
    icon: <SiGithub fontSize={32} className="group-hover:scale-150 transition ease-out delay-100 fill-"/>,
  },
  {
    wave: "waveC++",
    icon: <SiCplusplus fontSize={32} className="group-hover:scale-150 transition ease-out delay-100 group-hover:fill-blue-800"/>,
  },
];

function Card() {
  return (
    <div className="h-full p-5">
    <Title title="tecnologias"/>
      <section
        className="h-full w-full grid grid-cols-3 grid-rows-3 place-items-center 
        max-[640px]:grid-cols-2 
        max-[640px]:grid-rows-2
        max-[640px]:gap-10
        max-[640px]:pb-10"
      >
        {icons_bg.map((e) => {
          return <Bottom icons={e.icon} />;
        })}
      </section>
    </div>
  );
}

export default Card;
