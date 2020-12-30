import Employee from "./Employee";
import EmployeeForm from "./EmployeeForm";
import { useState, useEffect } from "react";

function EmployeeList() {

    const baseData = [{
        name: "test",
        email: "test@test.com",
        phone: "456",
        skills: "hacker",
        avatar: "https://i.imgur.com/ebHfuth.png",
    },
    {
        name: "test2",
        email: "test2@test.com",
        phone: "321",
        skills: "pretty",
        avatar: "https://i.imgur.com/TUhCrsY.png",
    },
    {
        name: "test3",
        email: "test3@test.com",
        phone: "123",
        skills: "none, completely useless",
        avatar: "https://i.imgur.com/t9HFQvX.png",
    }];

    let [employeeData, setData] = useState(baseData);
    let [showForm, setShowForm] = useState(false);
    let [blur, setBlur] = useState("");

    const showFormToggle = () => {
        setShowForm(!showForm);
        blur === "" ? setBlur("blur") : setBlur("");
    }

    function addEmployee(data) {
        setData((prevState) => {
            return [...prevState, data];
        })
        showFormToggle();
    }

    useEffect(() => {
        let data = localStorage.getItem("employeeData");
        if (data) {
            setData(JSON.parse(data));
        }
    }, []); // only after first render

    useEffect(() => {
        localStorage.setItem("employeeData", JSON.stringify(employeeData)); // save data to localStorage when data is changed
    }, [employeeData]);

    return (
        <div className={blur}>
            { showForm ? <EmployeeForm onSubmit={addEmployee} onExit={showFormToggle} /> : null }
            <button onClick={showFormToggle} className="button">Add Employee</button>
            <div>
                {
                    employeeData.map((employee, i) => {
                        return <Employee key={i} employeeData={employee} />;
                    })
                }
            </div>
        </div>
    );
}

export default EmployeeList;