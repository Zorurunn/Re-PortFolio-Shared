export const ExperienceCard = (props) => {
  return (
    <>
      <div className="w-full bg-gray p-[32px] grid grid-cols-1 gap-[15px] rounded-[20px] shadow-md md:flex md:justify-between dark:bg-[#1F2937]">
        <div className="grow basis-0 order-1">
          <img src="/logo-upwork.png" alt=""></img>
        </div>
        <div className="grow basis-0 order-3 md:order-2 flex flex-col gap-[15px]">
          <div className="text-[20px]">{props.title}</div>
          <div className="text-[16px]">
            {props.lists.map((item, index) => {
              return (
                <div key={index} className="flex justify-start gap-[5px]">
                  <h1 className="pt-[8px]">{item.dot}</h1>
                  <h1>{item.description}</h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grow basis-0 order-2 md:order-3 text-[12px] md:text-end">
          {props.date}
        </div>
      </div>
    </>
  );
};

{
  /* <div className="w-full bg-gray p-[32px] grid grid-cols-1 gap-[15px] rounded-[20px] shadow-md md:flex md:justify-between ">
<div className="grow basis-0 order-1">
    <img src='/logo-upwork.png' alt=""></img>
</div>
<div className="grow basis-0 order-3 md:order-2 flex flex-col gap-[15px]">
    <div className="text-[20px]">
        {props.title}
    </div>
    <div className="text-[16px]">
        {props.lists.map((item) => {
            return (
                <div className="flex justify-start gap-[5px]">
                    <h1 className="pt-[8px]" >{item.dot}</h1>
                    <h1 >{item.description}</h1>
                </div>
            )
        })}
    </div>
</div>

<div className="grow basis-0 order-2 md:order-3 text-[12px] md:text-end">
    {props.date}
</div>
</div> */
}

// <div className="bg-gray p-[32px] flex justify-between gap-[48px]  rounded-[20px] shadow-md">
//     <div>
//         <img src='/logo-upwork.png' alt=""></img>
//     </div>
//     <div className="flex flex-col gap-[15px]">
//         <div className="text-[20px]">
//             {props.title}
//         </div>
//         <div className="text-[16px]">
//             {props.lists.map((item) => {
//                 return (
//                     <div className="flex justify-start gap-[5px]">
//                         <h1 className="pt-[8px]" >{item.dot}</h1>
//                         <h1 >{item.description}</h1>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>

//     <p className="text-[12px] text-end">
//         {props.date}
//     </p>
// </div>
// </div >
{
  /* <div className="w-full md:pr-[183px] md:pl-[183px]">

            </div > */
}

{
  /* <div className="bg-gray p-[32px] grid grid-cols-1 gap-[15px] rounded-[20px] shadow-md md:grid-cols-[1fr_1.5fr_1fr] ">
<div className="order-1">
    <img src='/logo-upwork.png' alt=""></img>
</div>
<div className="order-3 md:order-2 flex flex-col gap-[15px]">
    <div className="text-[20px]">
        {props.title}
    </div>
    <div className="text-[16px]">
        {props.lists.map((item) => {
            return (
                <div className="flex justify-start gap-[5px]">
                    <h1 className="pt-[8px]" >{item.dot}</h1>
                    <h1 >{item.description}</h1>
                </div>
            )
        })}
    </div>
</div>

<div className="order-2 md:order-3 text-[12px] md:text-end">
    {props.date}
</div>
</div> */
}
// md:grid-cols-[1fr_1.5fr_1fr]
//
// <div className="pr-[183px] pl-[183px]">
// <div className="bg-gray p-[32px] flex justify-between gap-[48px]  rounded-[20px] shadow-md">
//     <div>
//         <img src='/logo-upwork.png' alt=""></img>
//     </div>
//     <div className="flex flex-col gap-[15px]">
//         <div className="text-[20px]">
//             {props.title}
//         </div>
//         <div className="text-[16px]">
//             {props.lists.map((item) => {
//                 return (
//                     <div className="flex justify-start gap-[5px]">
//                         <h1 className="pt-[8px]" >{item.dot}</h1>
//                         <h1 >{item.description}</h1>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>

//     <p className="text-[12px] text-end">
//         {props.date}
//     </p>
// </div>
// </div >

// export const ExperienceCard = (props) => {
//     return (
//         <>
//             <div className="pr-[183px] pl-[183px]">
//                 <div className="bg-gray p-[32px] flex justify-between gap-[48px]  rounded-[20px] shadow-md">
//                     <div>
//                         <img src='/logo-upwork.png' alt=""></img>
//                     </div>
//                     <div className="flex flex-col gap-[15px]">
//                         <div className="text-[20px]">
//                             {props.title}
//                         </div>
//                         <div className="text-[16px]">
//                             {props.description}
//                         </div>
//                     </div>

//                     <p className="text-[12px] text-end">
//                         {props.onsar}
//                     </p>
//                 </div>
//             </div >
//         </>
//     )
// }
