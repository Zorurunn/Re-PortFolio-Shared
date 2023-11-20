
export const Container = (props) => {

    return (

        <div className={props.bg + " " + "w-screen "}>
            <div className={"w-screen m-auto max-w-[1100px] px-[16px]"}>
                <div className='pt-[90px] pb-[90px]'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}