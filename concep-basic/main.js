import Auto from "./Auto.js";

let auto1 = new Auto("Ford", 2000, "rojo", 100);
let auto2 = new Auto("Nissan", 2010, "azul");
let auto3 = new Auto("Toyota", "blanco");

auto1.encender();
auto1.avanzar(50, 1.5)
auto1.apagar();
auto1.avanzar(50, 1.5);

auto2.encender();
auto2.apagar();

auto3.encender();
auto3.apagar();

console.log(`kilometraje ${auto1.kilometraje} `);
auto1.kilometraje = 5;
console.log(`kilometraje ${auto1.kilometraje} `);