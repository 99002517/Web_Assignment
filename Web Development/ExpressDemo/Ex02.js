//Demo for creating a REST service. REST service is a web service that uses HTTP methods GET, PUT, POST and DELETE to transfer data from a source to the User in the form of JSON and XML. REST stands for representational State Transfer. The purpose of the REST service is to render data from a secured location to the requesters. HTTP is the protocol used to transfer the data. REST does not expect to transfer html pages. They are used to transfer representational data: data with some form of self-description. JSON and XML have data with self descriptive info in the form of fields and Tags respectively. 

const fs = require('fs');

const emp = {
    empName : "Phaniraj",
    empAddress : "Bangalore",
    empSalary : 65000
}//object in JavaScript....

//to transfer any object thro HTTP, we convert this object to JSON(JavaScript Object Notation).
/* const jsondata = JSON.stringify(emp);//Converts the object to a JSON format...
console.log(emp);
console.log(jsondata);
 */

 //Use the parse method to convert jsondata to an object...
/* let jsonObj = { "cstId" : "123", "cstName": "Ramesh", "cstAddress" : "Kolkata" }

let data = JSON.parse(jsonObj);
console.log(data.cstId);
console.log(data.cstAddress);//to access individual data... */

class employee{
    constructor(name, address, salary){
        this.empName = name;
        this.empAddress = address;
        this.empSalary = salary;
    }
}

let employees = [];
employees.push(new employee("Phaniraj", "Bangalore", 67000));

let jsonData = JSON.stringify(employees);
console.log(jsonData);

function saveData(jsonData) {
    const filename = "data.json";
    fs.writeFileSync(filename, jsonData, 'utf-8');
    console.log("Data is saved as JSON");    
}

function loadData() {
    const filename = "data.json";
    const data = fs.readFileSync(filename, "utf-8");
    employees = JSON.parse(data);
}
saveData(jsonData);


//loadData();
/* for (const emp of employees) {
    console.log(emp.empName);
} */


