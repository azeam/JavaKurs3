function Employee({ employeeData }) {
    console.log({ employeeData });
    return (
    <div className="EmployeeDiv">
        <img className="avatar" alt="avatar" src={employeeData.avatar}></img>
        <ul className="employeesList">
            <li>Name: {employeeData.name}</li>
            <li>Email: {employeeData.email}</li>
            <li>Phone: {employeeData.phone}</li>
            <li>Skills: {employeeData.skills}</li>
        </ul>
    </div>
    );
}

export default Employee;