export const ActiveDotI = (props) => {
    return (
        <>
            <svg width={props.width} height={props.height} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="8" rx="4" fill={props.color} />
            </svg>
        </>
    )
}