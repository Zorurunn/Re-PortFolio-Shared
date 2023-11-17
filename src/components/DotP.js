import { ActiveDot } from "@/assets/svgs/ActiveDot"

export const DotP = (props) => {
    return (
        <>
            <div className="flex justify-start gap-[10px] items-center">
                <div className='flex justify-center items-center'>
                    <ActiveDot color={'black'} />
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </>
    )
}