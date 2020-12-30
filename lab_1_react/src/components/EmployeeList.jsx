import Employee from "./Employee";
import EmployeeForm from "./EmployeeForm";
import { useState, useEffect } from "react";
import { defaultAvatar, baseData } from "../basedata/BaseData";

function EmployeeList() {
    let [employeeData, setData] = useState(baseData);
    let [showForm, setShowForm] = useState(false);
    let [blur, setBlur] = useState("");
    let [oldEmployee, setOldEmployee] = useState(null);

    function showFormToggle(data, index) {
        setShowForm(!showForm);
        blur === "" ? setBlur("blur") : setBlur("");   
        // set data to pass to form if editing, add index to object
        if (data && index !== undefined) {
            data["index"] = index;
            setOldEmployee(data);    
        }
        else {
            setOldEmployee(null);
        }
    }

    function addUpdateEmployee(data) {
        if (!data.avatar) {
            data.avatar = defaultAvatar;
        }
        // update if index is set, otherwise save as new
        if (data.index) {
            setData((prevState) => {
                const prevStateCopy = [...prevState];    
                prevStateCopy[data.index] = data;
                return prevStateCopy;
            });               
        }
        else {
            setData((prevState) => {
                return [...prevState, data];
            });
        }
        showFormToggle();
    }

    function deleteEmployee(index) {
        setData((prevState) => {
            const prevStateCopy = [...prevState];    
            prevStateCopy.splice(index, 1);
            return prevStateCopy;
        });
    }

    // get local storage data on first render
    useEffect(() => {
        let data = localStorage.getItem("employeeData");
        if (data) {
            setData(JSON.parse(data));
        }
    }, []);

    // save data to localStorage when data is changed
    useEffect(() => {
        localStorage.setItem("employeeData", JSON.stringify(employeeData)); 
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