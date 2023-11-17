export const Icons = (props) => {
    return (
        <>
            <div className="w-full flex flex-col justify-between">
                <img className={props.width + " " + props.height} src={props.src}></img>
                <div>{props.title}</div>
            </div>
        </>
    )
}