import { useForm } from "react-hook-form";

function EmployeeForm(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        props.onSubmit(data); // send form data to parent
    }

    return (
        <div className="EmployeeFormDiv">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:<br />
                    <input ref={register} type="text" name="name" />
                </label><br />

                <label>E-mail:<br />
                    <input ref={register} type="text" name="email" />
                </label><br />
                
                <label>Phone number:<br />
                    <input ref={register} type="text" name="phone" />
                </label><br />
                
                <label>Skills:<br />
                    <input ref={register} type="text" name="skills" />
                </label><br />
                
                <label>Avatar URL:<br />
                    <input ref={register} type="text" name="avatar" />
                </label><br />
                
                <input className="button" type="submit" value="Save"></input>
            </form>
            <span className="exit" onClick={() => props.onExit()}>X</span>
        </div>
    );
}

export default EmployeeForm;