//Maps

let creds = new Map<string, any>();
 creds.set('Studentname', 'admin');
 creds.set('password', '123');
 console.log(creds);
 console.log(creds.get('Studentname'));
 console.log(creds.get('password'));
 console.log(creds.delete('password'));
 console.log(creds.has('password'));
 console.log(creds);
 console.log(creds.size);
 console.log(creds.keys());
 console.log(creds.values());
 console.log(creds.entries());
//  console.log(creds.forEach((value, key) => {
//     console.log(`${key} : ${value}`);
//  }));
 //creds.forEach((value,key) => (console.log(value, key)));
 for (let [i,j] of creds.entries()){
    if (i === 'Studentname'){
        console.log('Key is present');
        console.log(`${i} : ${j}`);
    }else{
        console.log('Key is not present');
    } 
 };
 