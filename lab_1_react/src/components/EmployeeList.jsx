import Employee from "./Employee";
import EmployeeForm from "./EmployeeForm";
import { useState, useEffect } from "react";
import { defaultAvatar, baseData } from "../basedata/BaseData";

function EmployeeList() {
    let [employeeData, setData] = useState(baseData);
    let [showForm, setShowForm] = useState(false);
    let [blur, setBlur] = useState("");
    let [oldEmployee, setOldEmployee] = useState(null);

    const showFormToggle = (data, index) => {
        setShowForm(!showForm);
        blur === "" ? setBlur("blur") : setBlur("");   
        if (data && index !== undefined) {
            data["index"] = index;
            setOldEmployee(data);    
        }
        else {
            setOldEmployee(null);
        }
    }

    function addUpdateEmployee(data) {
        if (data.avatar === "") {
            data.avatar = defaultAvatar;
        }
        if (data.index === "") {
            setData((prevState) => {
                return [...prevState, data];
            });   
        }
        else {
            setData((prevState) => {
                const prevStateCopy = [...prevState];    
                prevStateCopy[data.index] = data;
                return [...prevStateCopy];
            });
        }
        showFormToggle();
    }

    function deleteEmployee(index) {
        setData((prevState) => {
            const prevStateCopy = [...prevState];    
            prevStateCopy.splice(index, 1);
            return [...prevStateCopy];
        });
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
            { showForm ? <EmployeeForm data={oldEmployee} onSubmit={addUpdateEmployee} onExit={showFormToggle} /> : null }
            <button onClick={() => showFormToggle(null)} className="button">Add Employee</button>
            <div>
                {
                    employeeData.map((employee, i) => {
                        return <Employee key={i} employeeData={employee} onEdit={() => showFormToggle(employee, i)} onDelete={() => deleteEmployee(i)} />;
                    })
                }
            </div>
        </div>
    );
}

export default EmployeeList;