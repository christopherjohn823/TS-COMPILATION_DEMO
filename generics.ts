function identity<T>(value: T): T {
    console.log(value);
    return value;
}

const output1 = identity<string> ("Sidharth");
const output2 = identity<number> (100);


// using any
function getTest (Arr: any[]){
    console.log(Arr[0]);
    return Arr[0];
}

const val1 = getTest(["String","1","2"]);

// using Generic
function getTest1<T> (Arr: T[]): T{ 
    console.log(Arr[0]);
    return Arr[0];
}

const val2 = getTest1<string>(["String","1","2"]);


// using Generic to create an Interface
interface ApiResponse<T> {
    status : number;
    data : T;
}

const userResponse : ApiResponse<{ name : string, age : number}> = {
    status: 200,
    data: {
        name : "Sidharth",
        age : 34
    }
};