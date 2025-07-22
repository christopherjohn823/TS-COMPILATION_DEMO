// //string methods
let text: string = "ttPlaywright";
console.log(text.length);
// console.log(text.charAt(0));
// console.log(text.charCodeAt(0));
// console.log(text.concat(" is a testing tool"));
// console.log(text.endsWith("t"));
console.log(text.includes("ll"));   // REALLY IMPORTANT
// console.log(text.indexOf("w"));
// console.log(text.lastIndexOf("w"));
// console.log(text.repeat(2));
console.log(text.replace("wright", "test"));   // REALLY IMPORTANT
console.log(text.replace("t", "3"));
console.log(text.replaceAll("t", "3"));
// console.log(text.search("w"));
// console.log(text.slice(0, 5));
console.log(text.split("w"));  // GOING TO BE ASKED IN ALL INTERVIEWS, return type is string[] as it converts the string into an array
// console.log(text.startsWith("P"));
console.log(text.substring(0, 5));  // REALLY IMPORTANT
console.log(text.toLowerCase());
console.log(text.toUpperCase());
let text1: string = " tt Playwr ight ";
console.log(text1.trim());  // removes the spaces from the extremes
// console.log(text.valueOf());
// console.log(text.toString());
const languages = "Java,JavaScript,TypeScript,Python,C++,C#";   // you can use let as well instead of const
const languagesplitter = languages.split(",");
console.log(languagesplitter);

for (let i of languagesplitter) {
    if (i === 'Java'){
        console.log('Found Java');
        break;   // good coding standard
        
    }
    //console.log(i);

}
