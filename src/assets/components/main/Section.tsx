/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputType, RequestRepo } from "../../Interfaces/Types";
import Title from "./title/Title";
import Input from "../Input/Input";
import {  useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import style from '../../../../public/style/scroll.module.css'
import Repos from "./Repos";
import { GitHubRepositoriesDefault } from "../../Interfaces/GitGet";



function Section() {
  const [num , setNum] = useState<number>(0);
  const [repo , setRepo ] = useState<string>('')
  const [lister , setLister ] = useState<RequestRepo[]>([])
  const _input1 = useRef<HTMLInputElement>(null)
  const _input2 = useRef<HTMLInputElement>(null)

  const ev_setter = async () => {
    const n : number = parseInt(_input2.current?.value || '0')
    const repositorie : string = _input1.current?.value || ''
    setNum(n);
    setRepo(repositorie);
    const response : RequestRepo[] = await GitHubRepositoriesDefault(num) || [];

    setLister(response)
  }







  return (
    <section id="projetos" className="w-full bg-slate-900 p-5">
      <div className=" flex justify-between content-baseline max-[640px]:flex-col">
        <Title title="Projetos" />
        <div className={`flex items-center py-4 shadow-2xl ${style.custom} max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2`}>
          <Input tag={_input1} place="nome do repositorio" type={InputType.TEXT} />
          <Input tag={_input2} place="quantidade de repositorios" type={InputType.NUM} />
          <button onClick={ev_setter} className="h-10 w-10 flex items-center justify-center rounded-md bg-slate-950 border border-indigo-600"><FaSearch /></button>
        </div>
      </div>
      <div>
        <Repos/>
      </div>
    </section>
  );
}

export default Section;
