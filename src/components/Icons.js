export const Icons = (props) => {
    return (
        <>
            <div className="w-fit flex flex-col gap-[5px] justify-between items-center">
                <img className={props.width + " " + props.height} src={props.src}></img>
                <div>{props.title}</div>
            </div>
        </>
    )
}


