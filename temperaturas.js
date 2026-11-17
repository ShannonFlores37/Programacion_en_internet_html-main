//segun yo primero pongo el objeto o lo que sea
const boton = document.getElementById("boton")
const numero = document.getElementById("numero")
//el objeto de el select
const select = document.querySelector('#select');


//y ahora hago el evento de el click
boton.addEventListener("click", function(){
let numeroIngresado = Number(numero.value)
let seleccion = select.value
if(seleccion === "")
{
    alert('Porfavor selecciona una opción')
    return;
}
conversor(numeroIngresado, seleccion)

});

function conversor(numeroIngresado, seleccion)
{
if(seleccion === "value1")
{
    document.getElementById('resultado').innerHTML = ((numeroIngresado * 9 / 5) + 32)+("F°")

}
else  if(seleccion === "value2")
{
     document.getElementById('resultado').innerHTML = ((numeroIngresado - 32) * 5 / 9)+("C°")
}
}