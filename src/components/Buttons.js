export const Buttons = (props) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center ">
                <div className='w-fit bg-gray-200 text-gray-600 rounded-[20px] pr-3 pt-1 pl-3 pb-1'>
                    {props.title}
                </div>
            </div>
        </>
    )
}