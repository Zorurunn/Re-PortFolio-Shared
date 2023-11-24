

export const Test = (props) => {
    return (
        <div>
            {props.fruit === 'apple' ? (
                <div>a</div>
            ) : props.fruit === 'orange' ? (
                <div>o</div>
            ) : (
                <div>b</div>
            )}
        </div>
    );
}