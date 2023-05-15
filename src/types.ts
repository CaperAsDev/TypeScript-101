/* TypeScript Type annotation */
const userName: string = 'Caper';
// in typescript we add the type annotation(:string) of the variable after the variable declaration(userName).

/* TypeScript inference */
let productName = 'NoteBook';
let productPrice = 5.500;
// ?The typeScript inference Motor will infer the variable type if we don't define it explicitly. So now productName is as string type variable and productPrice is a number type variable and we cannot change this type. If we try to reassign the variable value witg another data type it will show up a error.

//productName = 123;//type'number' is not assignable to type 'string'
productName = 'Actus';

/* Constants */
//?We know and ofcourse TypeScript knows, that constants cannot change its value, if we declare a constant with any value it will be its unique value throughout the programm, so typeScript infer its value as its type of variable because it will not change.

const surName = 'Actus';


//TODO--------------------<<< ||| TYPES of DATA  |||  >>>

//TODO-------------------<<|| NUMBER ||-->>
((/* NUMBER */) => {
  //*let TypeScript infer its value.
  let productPrice = 100;
  productPrice = 12;

  //*give TypeScript the type of variable
  let customerAge: number = 28;
  customerAge += 1;

  //*When you just want to declare a variable, type it.
  let productStock: number;
  console.log(/* productStock */);//!variable 'productStock' is used before being assigned.
  productStock = 10;

  //* Hexadecimal and binary values are also considered numbers
  let hex = 0xfff;
  console.log(hex);//4095
  let bin = 0b1001;
  console.log(bin);//9

  //!Don't type a variable with "Number" use instead of "number" it don't work the same way.
})();

//TODO-------------------<<|| BOOLEAN ||-->>

((/* BOOLEAN */) => {
  //*Type infered
  let isEnabled = true;
  isEnabled = false;

  //* Implicit type
  let isNew: boolean = false;
  isNew = true;

  const random = Math.random();
  isNew = random >= 0.5 ? true : false;//!typescript knows that the returned value must be a boolean.
})();

//TODO-------------------<<|| STRINGS ||-->>
((/* STRINGS */) => {
  //* type infered
  let productTitle = 'GameCard';

  const productDescription = "I'm an awesome game card";
  let productPrice = 100;
  let isOutOfStock = true;

  //*Implicit type
  let product: string = `
  title: ${productTitle},
  description: ${productDescription},
  price: ${productPrice},
  outOfStock: ${isOutOfStock},
  `;
  console.log(product);
})();

//TODO-------------------<<|| ARRAY ||-->>
((/* ARRAY */) => {

  //* Unique Type infered
  let units = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  units.push(10);
  /*
    !The Next examples will trigger an error because the type of the array is number[], this means that only numbers can be an element.
    ?units.push('10');
    ?units.push(true);
    ?units.push({});
  */

  //*Multiple types infered

  let myArray = [true, [1, 2, 3]];
  //?myArray has a type: (boolean|number[])---> This means only boolean values and number arrays can be assigned as elements.
  myArray.push(false);
  myArray.push([3, 4, 5]);

  //*Implicit Type

  const someData: (number | string)[] = [];
  //? I can only assign the type of data i've defined in the declaration.
  someData.push("caper");
  someData.push("actus");
  someData.push(28);

})();