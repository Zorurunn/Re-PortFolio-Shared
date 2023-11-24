import { useRef } from "react";


export const Tests = () => {
    const messageEndRef = useRef();


    const scrollToLatest = (behavior = 'smooth') => messageEndRef.current.scrollIntoView({ behavior });
    return (
        <>
            {/* {renderMessages()} */}
            <div
                style={{ float: "left", clear: "both" }}
                ref={messagesEndRef}
            >
                aaa
            </div >
        </>
    )
}
// return (
// <List>
//     {renderMessages()}
//     <div
//         style={{ float: "left", clear: "both" }}
//         ref={messagesEndRef}
//     />
// </List>