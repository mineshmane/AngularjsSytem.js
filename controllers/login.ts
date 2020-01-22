
class Employee{
    EmpNo:number;
    EmpName:string;
    Salary:number;
}
 
//2. The TypeScript interface
interface IEmployee{
    header:string,
    Employees:any[]; 
    addEmployee():void;
} 
 
class EmployeeCtrl implements IEmployee{
    header:string;
    Employees : any[];
    Emp:Employee;
    
    constructor() {
         this.header = "Employee List";
         this.Employees=[
             {
                 "EmpNo":101,
                 "EmpName":"MS",
                 "Salary":20000
             },
              {
                 "EmpNo":102,
                 "EmpName":"LS",
                 "Salary":18000
             },
              {
                 "EmpNo":103,
                 "EmpName":"TS",
                 "Salary":16000
             }
              
         ];
        this.Emp = new Employee();
        this.Emp.EmpNo = 0;
        this.Emp.EmpName = "";
        this.Emp.Salary = 0;
         
    }
     
    addEmployee(){
       this.Employees.push(this.Emp);
    }
}
 

    myApp.controller("EmployeeCtrl",EmployeeCtrl);

// myApp.controller('controlLogin', Login);