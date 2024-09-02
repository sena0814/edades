let N = parseInt(prompt("Ingrese el numero de personas"))


let suma = 0 //acumulador
let i = 1 //contador

while (i<=N){
    let edad = parseInt(prompt("Ingrese su edad"))
    suma = suma + edad
    i=i+1
}
let promedio = suma/N         //el promedio se calcula por fuera del ciclo, se peude declarar una variable
document.write("El promedio de las edades ingresadas es " +promedio)      
