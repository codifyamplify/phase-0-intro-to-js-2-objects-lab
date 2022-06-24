// Write your solution in this file!
const employee = {
    name: "david whitney",
    streetAdress: "1107 pine grove drive"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedObj = {...employee};
    updatedObj[key] = value;
    return updatedObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    // const copyOfEmployee = {...employee}
    // return delete copyOfEmployee[key]
    const newObj = { ...employee }
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}