const MAX_RETRIES = 5;
//MAX_RETRIES = 10;


// set of named constants which are related to each other for a common purpose. This is an example of default enum.
enum testexecutionstatus {
    Pass,
    Fail,
    Skip
}

console.log(testexecutionstatus.Skip);

//This is an example of string enum
enum userRole{
    Admin = "Admin",
    Manager = "Manager",
    Employee = "Employee"

}
console.log(userRole.Admin);

//This is an example of customised enum

enum priority{
    Low = 0,
    Medium=1,
    High=2

}
console.log(priority.High);

// enum as types

enum userRole1{
    Admin = "Admin01",
    Manager = "Manager02",
    Employee = "Employee03"

}

function getRole(role: userRole1): string{
    if (role === userRole1.Admin){
        console.log("Access provided")
        return "Access provided";
    }else{
        console.log("Access denied")
        return "Access denied";
    }
}
getRole(userRole1.Employee);