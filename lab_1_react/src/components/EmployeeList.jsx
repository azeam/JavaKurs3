import Employee from "./Employee";
import { useState, useRef, useEffect } from "react";

function EmployeeList() {

    let [employeeData, setData] = useState([{
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
        }
       ]);
    let userInput = useRef();

    function addEmployee() {
        let dataInput = userInput.current.value;
        console.log(dataInput);
        let newEmployee = {
            name: "test4",
            email: "test4@test.com",
            phone: "911",
            skills: "beard",
            avatar: "https://i.imgur.com/Q9qFt3m.png",
        }
        setData((prevState) => {
            return [...prevState, newEmployee];
        })
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
        <>
            <input ref={userInput} type="text"></input>
            <button onClick={addEmployee} className="button">Add Employee</button>
            <div>
                {
                    employeeData.map((employee, i) => {
                        return <Employee key={i} employeeData={employee} />;
                    })
                }
            </div>
        </>
    );
}

export default EmployeeList;