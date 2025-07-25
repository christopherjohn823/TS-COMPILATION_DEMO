type Userone = {
 name: String;
 email: string;
};


type UserKeys = keyof Userone; // "name" | "email"


function getValue(obj: Userone, key: UserKeys) {
 return obj[key];
}
const userss: Userone = {
 name: "John",
 email: "john@example.com",
};
const userValue = getValue(userss, "name");
console.log(userValue);
