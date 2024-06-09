import { ReactNode } from "react";

 function Bottom(props : { img : string , icons : ReactNode}){

    const {icons} = props;
    return (
        <div className={`bg-[url(/public/svg/waveGithub.svg)] bg-neutral-900 bg-cover flex items-center justify-center shadow-2xl border-black border-3 h-1/3 w-1/6 rounded-lg max-[640px]:h-28 max-[640px]:w-24`}>
            {icons}  
        </div>
    )
}

export default Bottom;