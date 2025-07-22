//Maps

// let creds = new Map<string, any>();
//  creds.set('Studentname', 'admin');
//  creds.set('password', '123');
//  console.log(creds);
//  console.log(creds.get('Studentname'));
//  console.log(creds.get('password'));
//  console.log(creds.delete('password'));
//  console.log(creds.has('password'));
//  console.log(creds);
//  console.log(creds.size);
//  console.log(creds.keys());
//  console.log(creds.values());
//  console.log(creds.entries());
// //  console.log(creds.forEach((value, key) => {
// //     console.log(`${key} : ${value}`);
// //  }));
//  //creds.forEach((value,key) => (console.log(value, key)));
// //  for (let [i,j] of creds.entries()){
// //     if (i === 'Studentname'){
// //         console.log('Key is present');
// //         console.log(`${i} : ${j}`);
// //     }else{
// //         console.log('Key is not present');
// //     } 
// //  };
 
//  for (let i of creds.keys()){
//     console.log(`${i}`);
//  }
//  for (let j of creds.values()){
//     console.log(`${j}`);
//  }
//  for (let [i] of creds.keys()){
//     console.log(`${i}`);
//  }
//  for (let [j] of creds.values()){
//     console.log(`${j}`);
//  }

let credentials = new Map <string, number>();
credentials.set('admin', 123);
credentials.set('john', 456);
credentials.set('smith', 789);
console.log(credentials);
console.log(credentials.get('admin'));
console.log(credentials.has('admin'));

for (let [i,j] of credentials.entries()){
    if(j%2 === 0){
        console.log(`${i}:${j} is Even`);;
    // }else{
    //     console.log(`${i}:${j} is Odd`);
    //}
}      
}

