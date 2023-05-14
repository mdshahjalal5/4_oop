
// Pick

type Person3 = {
  name: string;
  email?: string;
  contactNo: string;
};

type Contact = Pick<Person3, "contactNo" | "email">;

//Omit

type Name = Omit<Person3, "email" | "contactNo">;

//Partial
// To make all the properties be optional type
type Optional = Partial<Person3>;
type RequiredProps = Required<Person3>;

const person: Readonly<Person3> = {
  name: "Persian",
  email: "abc@gmail.com",
  contactNo: "122222",
};

person.name = "Forhan";

// Record Type

// type myObj = {
//   a: string;
//   b: string;
//   c: string;
// };

// using index signature
// type myObj = {
//   [key: 'a'|'b'|'c']: string;
// };

// Record   'a'| 'b' |'c"
type myObj = Record<"a" | "b" | "c" | "d", string>;

const obj: myObj = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
};
