interface Person {
  name: string;
  age: number;
  born: Date;
}

// function showPerson(data: Person) {
//     console.log(data);
//     return data;
//   }

function showPerson(data: Person): Person {
  console.log(data);
  return data;
}

const obj:Person = { name: "Eduard", age: 3, born: new Date("2020/03/06") };
// typeof(obj) //Object
// typeof(data) //Person
showPerson(obj);
