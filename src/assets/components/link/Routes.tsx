import style from './Link.module.css'
function Routes(props: { text: string , location : string }) {
    const { text , location } = props
    return (
        <a href={location}>
            <div className={`${style.components} w-full h-full flex items-center justify-center text-center max-[640px]:text-xs`}>
                {text}
            </div>
        </a>
    )
}

export default Routes;