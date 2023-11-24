import { LinkIcon } from "@/assets/OtherIcons/LinkIcon"
import { Buttons } from "./Buttons"
export const WorkDetails = (props) => {
    return (
        <>
            <div className={'grid grid-cols-[1fr] rounded-[20px] shadow-md md:grid-cols-[1fr_1fr] overflow-hidden'}>
                <div div className={'md:' + props.order + " " + "bg-gray-50 p-[48px] flex justify-center items-center dark:bg-[#374151] "}>
                    <div className="rounded-[15px]">{props.image}</div>
                </div>
                <div className={"p-[48px] flex flex-col gap-[24px] dark:bg-[#1F2937]"}>
                    <div>{props.title}</div>
                    <p>
                        {props.description}
                    </p>
                    <div className="flex flex-wrap gap-[5px]">

                        {
                            props.buttons.map((item) => {
                                return item
                            })
                        }
                    </div>
                    <div>
                        <LinkIcon color={props.dark ? '#D1D5DB' : '#4B5563'} />
                    </div>
                </div>
            </div >

        </>
    )

}
//  + " " + Boolean(props.order) ? 'rounded-l-lg' : 'rounded-r-lg'
// + " " + props.order ? 'rounded-l-lg' : 'rounded-r-lg'
// grid grid-cols-[1fr_1fr]  gap-[48px] rounded-[20px] shadow-md

// import { Buttons } from "./Buttons"
// export const WorkDetails = (props) => {
//     return (
//         <>
//             <div className={'grid grid-cols-[1fr_1fr]  gap-[48px] rounded-[20px] shadow-md'}>
//                 <div className="p-[48px]">
//                     <img src='./Work.png'></img>
//                 </div>
//                 <div className="p-[48px] flex flex-col gap-[24px]">
//                     <div>Fiskil</div>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
//                     </p>
//                     <div className="flex flex-wrap gap-[5px]">
//                         <Buttons title={'Github'}></Buttons>
//                         <Buttons title={'React'}></Buttons>
//                         <Buttons title={'NextJs'}></Buttons>
//                         <Buttons title={'TypeScript'}></Buttons>
//                         <Buttons title={'C Sharp'}></Buttons>
//                         <Buttons title={'MongoDB'}></Buttons>
//                         <Buttons title={'Inkliw'}></Buttons>
//                         <Buttons title={'Facebook'}></Buttons>
//                     </div>
//                     <div>
//                         <img src="/LinkIcon.png"></img>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )

// }