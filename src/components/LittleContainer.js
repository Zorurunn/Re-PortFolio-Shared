
export const LittleContainer = (props) => {
    return (
        <div className={"w-screen m-auto max-w-[1100px] px-[16px]"}>
            <div className={'flex justify-between  md:hidden' + ' ' + props.align}>
                {props.children}
            </div>
        </div >
    )

}