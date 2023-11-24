export const Title = (props) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-[16px] mb-[48px] ">
                <div className='w-fit bg-gray-200 text-gray-600 rounded-[20px] pr-3 pt-1 pl-3 pb-1 dark:bg-[#374151] dark:text-[#D1D5DB]'>
                    {props.title}
                </div>
                <div className="mt-[16px] text-gray-600 text-center dark:text-[#D1D5DB]">
                    {props.description}
                </div>
            </div>
        </>
    )
}