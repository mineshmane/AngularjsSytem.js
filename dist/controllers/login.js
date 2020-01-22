var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var EmployeeCtrl = /** @class */ (function () {
    function EmployeeCtrl() {
        this.header = "Employee List";
        this.Employees = [
            {
                "EmpNo": 101,
                "EmpName": "MS",
                "Salary": 20000
            },
            {
                "EmpNo": 102,
                "EmpName": "LS",
                "Salary": 18000
            },
            {
                "EmpNo": 103,
                "EmpName": "TS",
                "Salary": 16000
            }
        ];
        this.Emp = new Employee();
        this.Emp.EmpNo = 0;
        this.Emp.EmpName = "";
        this.Emp.Salary = 0;
    }
    EmployeeCtrl.prototype.addEmployee = function () {
        this.Employees.push(this.Emp);
    };
    return EmployeeCtrl;
}());
myApp.controller("EmployeeCtrl", EmployeeCtrl);
// myApp.controller('controlLogin', Login);
//# sourceMappingURL=login.js.map