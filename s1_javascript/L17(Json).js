// Json -> JavaScript Object Notation
obj = { name: "Harry", length: 1, a: { this: "that" } }
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);
parsed = JSON.parse(jso);
