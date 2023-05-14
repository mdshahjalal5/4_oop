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
