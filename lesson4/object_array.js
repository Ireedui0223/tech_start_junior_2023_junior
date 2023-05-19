let class_11a_studens = [
  {
    name: 'Ireedui',
    age: 21,
    course: 4,
    isWorking: true,
    hoolidsnu: false,
    olsdjinu: 'aaaaimer'
  },
  {
    name: 'Ireedui1',
    age: 21,
    course: 4,
    isWorking: false,
    hoolidsnu: true,
    olsdjinu: 'mdkueno'
  },
  {
    name: 'Ireedui2',
    age: 21,
    course: 4,
    isWorking: true,
    hoolidsnu: true,
    olsdjinu: 'ghdee l olsooden'
  }
];
let names = [];
let working_students = 0;
for (let i = 0; i < class_11a_studens.length; i++) {
  //   console.log(class_11a_studens[i]);
  names.push(class_11a_studens[i].name);
  if (class_11a_studens[i].isWorking) {
    working_students++;
  }
}

console.log(names);
console.log(`niit ajillaj baigaa suraghid : ${working_students}`);
