import { RequestDefault} from "../../../Interfaces/Types";
import Title from "../title/Title";
import Content from "./Content";
import { DiCodeigniter } from "react-icons/di";


function Project(props: RequestDefault) {
  const { title , desc, url} = props;
  return (
    <a href={url || ''} target="_blank" className="w-1/4">
      <div className="
      bg-slate-950 
      h-44 w-8/12
      flex justify-center items-center 
      mt-2 p-4
      max-[640px]:flex-col
      overflow-hidden
      rounded-md
      border-2
     border-indigo-700">

        <div className="w-1/2 h-full flex items-center content-center  max-[640px]:w-full max-[640px]:h-28">
          <DiCodeigniter fontSize={52} className="relative left-1/4 animate-pulse fill-indigo-600" />
        </div>
        <hr />
        <div className="h-1/2 w-1/2 flex items-center justify-center max-[640px]:w-full max-[640px]:flex-col">
          <div>
            <Title title={title || "não há titulo"} />
            <Content text={[desc || "não há descrição"]} />
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;
