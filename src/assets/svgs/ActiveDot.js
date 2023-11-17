export const ActiveDot = (props) => {
    return (
        <>
            <svg width="8" height="8" viewBox="0 0 8 8" fill={props.color} xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="8" rx="4" fill={props.color} />
            </svg>
        </>
    )
}