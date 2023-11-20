export const ImageShadow = (props) => {
    return (
        <div className={'relative w-full h-full'}>
            <img className={'absolute object-cover z-10 w-[calc(100%-40px)] md:w-full h-full left-[20px]' + " " + props.alignPic} src={props.src} alt="" />
            <div className={'w-full h-full bg-gray-300 relative z-0 top-[20px] md:top-[40px]'}></div>
        </div >
    )
}
