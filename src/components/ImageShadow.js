export const ImageShadow = (props) => {
    return (
        <>
            <div className='relative border-5'>
                <img className={'absolute  z-10 ' + props.width + " " + props.height + " " + props.alignPic} src={props.src} alt=""></img>
                <div className={'bg-gray-300 absolute  z-0 ' + props.width + " " + props.height + " " + props.alignBox}></div>
            </div >
        </>
    )
}