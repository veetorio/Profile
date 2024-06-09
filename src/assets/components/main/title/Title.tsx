function Title(props : {title : string}){
    return (
        <div className="mt-4 max-[640px]:m-auto">
            <h1 className="text-lg font-bold">{props.title}</h1>
            <hr className="w-96 border-2 border-indigo-600 rounded-r-full" />
        </div>
    )
}

export default Title;