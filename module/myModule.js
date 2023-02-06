console.log(module)

const myWebAdress = {
  name: "Steven",
  surname: "Nizama",
};

const myNumber = 30;
const user = "Steven";

// module.exports = {
//   myWebAdress,
//   myNumber,
//   user,
// };

//  --> Otra manera --> Se añaden objetos desde Js pero se prefiere la primera forma

module.exports.user = user

console.log(module)
