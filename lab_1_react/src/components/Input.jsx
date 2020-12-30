function Input(props) {
    function cap(label) {
        return label.charAt(0).toUpperCase() + label.slice(1) + ":";
    }

    return (
        <>
            <label>{cap(props.data)}<br />
                <input type="text" name={props.data} ref={props.reg} />
            </label><br />
        </>
    );
}

export default Input;