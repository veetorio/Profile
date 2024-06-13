function Title(props: { title: string }) {
    return (
        <div className="mt-4 max-[640px]:m-auto max-[640px]:px-10 ">
            <h1 className={`text-lg font-bold max-[640px]:text-center max-[640px]:text-base  `}>{props.title}</h1>
            <hr className="w- border-2 border-indigo-600 rounded-r-full max-[640px]:w-64 max-[640px]:m-auto" />
        </div>
    )
}

export default Title;