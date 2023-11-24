import { ActiveDotI } from "@/assets/OtherIcons/ActiveDotI"

export const DotP = (props) => {
    return (
        <>
            <div className="flex justify-start gap-[10px] items-center">
                <div className='flex justify-center items-center'>
                    <ActiveDotI color={'black'} />
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </>
    )
}