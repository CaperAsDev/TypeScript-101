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

//|--------------------<<< ||| TYPES of DATA  |||  >>>

//<-------------------<<|| NUMBER ||-->>
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

//<-------------------<<|| BOOLEAN ||-->>

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

//<-------------------<<|| STRINGS ||-->>
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

//<-------------------<<|| ARRAY ||-->>
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

  //*Implicit Type & union

  const someData: (number | string)[] = [];
  //? I can only assign the type of data i've defined in the declaration.
  someData.push("caper");
  someData.push("actus");
  someData.push(28);

})();

//<-------------------<<|| ANY ||-->>
((/* ANY */) => {
  //*Implicitly typed
  //!Using any as a type can be considered a bad practice since the main idea of using typescript is the use of typed variables to control the data in the project.
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = 'Caper';
  myDynamicVar = { name: 'Actus' };
  myDynamicVar = ['caper', 'actus'];

  //?Cast : to change the type of a value, there are two ways of doing this:
  const myTypedVar1 = (myDynamicVar as string[]).concat(' ');//*Use "as" to cast the variable
  console.log(myTypedVar1);

  myDynamicVar = 'CaperActus'
  const myTypedVar2 = (<string>myDynamicVar).includes('Caper');//* Use "<>"" to enclose the type
  console.log(myTypedVar2);

})();

//<-------------------<<|| Union Types ||-->>
((/* UNION TYPES */) => {
  //*explicitly typed
  //?Using the or operator "|" to connect different types we're alowing the variable to recieve more than one type of data, this add felxibility when managing data.
  let userId: number | string;
  userId = 123;
  userId = 'capipop';

  function greeting(mytext: string | number) {
    if (typeof mytext === 'string') {
      mytext.toLocaleUpperCase()
    } else {
      mytext.toFixed(0);
    }
  }
  greeting(userId);
})();

//<-------------------<<|| ALIAS & LITERAL TYPES ||-->>
((/* ALIAS & LITERAL TYPES */) => {
  //*Alias
  //?Is recomended to use PascalCase when naming an ALIAS type
  type UserId = string | number;

  let userId: UserId;
  userId = 123;
  userId = 'capipop';

  //*Literal Types
  //? Limited the range of possible values for a variable
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';
  //! Any other value will throw an error

  function greeting(user: UserId, size: Sizes) {
    if (typeof user === 'string') {
      user.toLocaleUpperCase()
    }
    console.log(`Dear ${user} your t-shirt is ${size} size.`);

  }
  greeting(userId, 'S');
})();

//<-------------------<<|| NULL & UNDEFINED ||-->>
((/* NULL & UNDEFINED */) => {
  //? The situation to use null or undefined as types are unique, so concider carefully when to use them.

  type UserName = string | null;
  function sayHi(userName: UserName) {
    let hello = 'Hi ';
    //?the optional chaining "?" help us to validate if userName is a validate type of data.
    //?the OR operator "||" help us to behave according to the first sentence if it is falsy(null, undefined, "", 0, false, NaN) then return the second sentence
    hello += userName?.toLowerCase() || 'Strange';
    return hello;
  }
  console.log(sayHi('Caper'));
  console.log(sayHi(null));
})();

//<-------------------<<|| FUNCTIONS ||-->>
((/* FUNCTIONS */) => {
  //?In a function types are used when defining the parameters and it apllies all we've seen before.
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const myProductObj = (productName: string, productSize: Sizes, personalized: boolean = false) => {
    //*I can give a default value to a parameter, so it's optional.
    return { productName, productSize, personalized }
  }
  const myProductObj2 = (productName: string, productSize: Sizes, personalized?: boolean) => {
    //* if i add a "?" after the parameter name, it means the parameter is optional but if is not passed its value will be "undefined" so typescript infer that the value is in this case: boolean | undefined
    return { productName, productSize, personalized }
  }

  const product1 = myProductObj('capicard', 'S');
  console.log(product1);//{ productName: 'capicard', productSize: 'S', personalized: false }

  const product2 = myProductObj2('capishirt', 'M')
  console.log(product2);//{ productName: 'capishirt', productSize: 'M', personalized: undefined }

})();

//<-------------------<<|| VOID ||-->>
((/* VOID */) => {
  //? Void is the type defined to functions without a return
  //*We define implicitly the type of nameBuilder() return (defined after the parameters)
  const nameBuilder = (name: string, surname: string): string => {
    const fulName = name + ' ' + surname;
    return fulName;
  }
  //*Here we define again explicitly the type of printName but this time is "void", which means that there will be no return value, if we add a return + value it will automatically throw an error.
  const printName = (names: string[]): void => {
    let fullName = nameBuilder(names[0], names[1]);
    console.log(`¡Hi ${fullName}!, great to see you here 😎`);
    return;
  }
  //*We can also let typescript infer the void type just skipping the implicit type declaration.
  printName(['Caper', 'actus']);
})();


//<-------------------<<|| LITERAL TYPES ||-->>
((/* LITERAL TYPES */) => {
  //?Using literal types we can define any structure of data including objects and arrays
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Keywords = 'Game' | 'Anime' | 'Manga'| 'Merchandising';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    keywords: Keywords[],
    size?:Sizes
  }
  //*Now i'm defining that products will be an array that will only contain objects built with the Product type.
  const products : Product[] = [];

  //*Now i'm building a function that add to our products array objects constructed from Product type objects
  const addProduct = (product : Product) =>{
    products.push(product);
  }

  addProduct({
    title: 'CapiCard',
    createdAt: new Date(),
    stock: 5,
    keywords: ['Game'],
  });
  addProduct({
    title: 'CapiT-shirt',
    createdAt: new Date(),
    stock: 15,
    keywords: ['Merchandising'],
    size: 'S'
  });

  console.log(products);

})();
const mamama = 1 +'1';