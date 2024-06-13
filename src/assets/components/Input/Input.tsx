import { InputType } from "../../Interfaces/Types";
import { ChangeEvent, LegacyRef, useCallback, useState } from "react";

function Input(props: { place: string, type: InputType , tag : LegacyRef<HTMLInputElement>}) {
    const ev = useCallback((event :  ChangeEvent<HTMLInputElement>) => {
        setContentRepo(event.target?.value)
    },[]);

    const [contentrepo, setContentRepo] = useState('')
    return (
        <input ref={props.tag} value={contentrepo} onChange={ev} type={props.type} className="bg-slate-950 p-2 mr-2 rounded-md border border-indigo-600" placeholder={props.place} />
    )
}

export default Input;