function Content(props : { text : string[]}) {
const { text } = props
  return (
    <div className=" w-full h-full">
        {
            text.map( e => {
                return <p className="pt-2 font-light max-[640px]:text-justify max-[640px]:text-xs">{e}</p>
            })
        }
    </div>
  );
}

export default Content;
