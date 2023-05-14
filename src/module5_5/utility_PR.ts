// !n! mium => modu> im> uti>mul => module, import&export => multiple 

// !n! utility => po rip=> piomripa> pick> omit> required> partial

interface country {
    name:string, 
    population:number, 
    cca3:string, 
}

// !n! tape =>  pick take  the type from the interface 
type name_and_population = Pick<country, 'name'|'population' >

// type name_and_population = { // !here type means 
//   name: string;
//   population: number;
// };

// !n! omit => omit reject a type here population 
type omit_population = Omit<country, 'population'>


// !n! partial => optional => make  all properties  optional type

type TPartial = Partial<country>

// !n1 here TPartial is 
// type TPartial = {
//   name?: string | undefined;
//   population?: number | undefined;
//   cca3?: string | undefined;
// };

// !n! required => mar => make every type    required 
type TRequire = Required<country>

const requiredCountry:TRequire = {
    name:'bangla', 
    population:333, 
    cca3:'bdb', 

}

// !n! readonly => make all type readonly 
const readonly_country: Readonly<country> = {
  name: "bangla",
  population: 333,
  cca3: "bdb",
};
// !n! can't do cause it readonly 
readonly_country.population =4;//!  [ts] Cannot assign to 'population' because it is a read-only property.


// !n! index signature => can't use literal => literal means specifinc key name 
type division = {
    [key_any:string] : string;
}

const division: division = {
  name: 3, // ![ts] Type 'number' is not assignable to type 'string'.
  logo: true,
};


// !n! record => support literal types 

type division_record = Record<string, string>;

const division_record: division_record = {
  name: "dhaka",
  age: 73, //! [ts] Type 'number' is not assignable to type 'string'.

};

type division_record_literal = Record<"name"|"age"|"is_populate", string|number|boolean>

const division_record_literal: division_record_literal = {
  name: "dhaka",
  age: null, // ![ts] Type 'null' is not assignable to type 'string | number | boolean'.
  city: "barisshal", //  !n [ts] Type '{ name: string; city: string; }' is not assignable to type 'division_record_literal'.
  //   Object literal may only specify known properties, and 'city' does not exist in type 'division_record_literal'.
};


