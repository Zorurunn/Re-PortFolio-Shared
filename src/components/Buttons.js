export const Buttons = (props) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className='w-fit bg-gray-200 text-gray-600 rounded-[20px] pr-3 pt-1 pl-3 pb-1 dark:bg-[#374151] dark:text-[#D1D5DB]'>
                    {props.title}
                </div>
            </div>
        </>
    )
}