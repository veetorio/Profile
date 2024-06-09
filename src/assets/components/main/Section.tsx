import { InputType, RequestRepo } from "../../Interfaces/Types";
import Project from "./content/Project";
import Title from "./title/Title";
import Input from "../Input/Input";
import { useRef } from "react";
import { GitHubRepositoriesDefault } from "../../Interfaces/GitGet";
import { FaSearch } from "react-icons/fa";
import style from '../../../../public/style/scroll.module.css'

const items: RequestRepo[] = await GitHubRepositoriesDefault();
function Section() {
  const _input1 = useRef<HTMLInputElement>(null)

  _input1.current?.addEventListener("keypress", () => {
  });
  return (
    <section id="projetos" className="w-full bg-slate-900 p-5">
      <div className=" flex justify-between content-baseline">
        <Title title="Projetos" />
        <div className={`flex items-center py-4 shadow-2xl ${style.custom}`}>
          <Input tag={_input1} place="nome do repositorio" type={InputType.TEXT} />
          <Input tag={_input1} place="nome do repositorio" type={InputType.NUM} />
          <button className="h-10 w-10 flex items-center justify-center rounded-md bg-slate-950"><FaSearch/></button>
        </div>
      </div>
      <div className="h-96 overflow-y-auto">
        {items?.map((e) => {
          return <Project title={e.name} desc={e.description} url={e.html_url} />;
        })}
      </div>
    </section>
  );
}

export default Section;
