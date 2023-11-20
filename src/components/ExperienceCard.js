export const ExperienceCard = (props) => {
    return (
        <>
            <div className="pr-[183px] pl-[183px]">
                <div className="bg-gray p-[32px] flex justify-between gap-[48px]  rounded-[20px] shadow-md">
                    <div>
                        <img src='/logo-upwork.png' alt=""></img>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className="text-[20px]">
                            {props.title}
                        </div>
                        <div className="text-[16px]">
                            {props.description}
                        </div>
                    </div>

                    <p className="text-[12px] text-end">
                        {props.onsar}
                    </p>
                </div>
            </div >
        </>
    )
}