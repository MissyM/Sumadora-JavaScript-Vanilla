/*Este programa permite calcular las suma de dos elementos al pulsar el botón CALCULAR y muestra su resultado.
 La implemntación es singular porque creamos los elementos en este script con la función createElement()
y los introducimos en en el contenedor con la función appendChild()


CREAMOS LOS ELEMENTOS
*/

var contenedor = document.getElementById("contenedor");//Referenciamos u obtenemos el elemento 
													  //div que esta en el html por su Id contenedor
//Creamos los elementos de tipo input donde el usuario escribe los valores
var valoruno = document.createElement("input");
var valordos = document.createElement("input");

//Creamos el boton con el que se calcula
var btn_calcular = document.createElement("input");
btn_calcular.id = "btn_cal";// Este atributo me permite colocarle estilos al elemento
btn_calcular.type = "button";// Atributo que me indica que el input es un botón
btn_calcular.value= "CALCULAR";///Atributo que me proporciona el texto

//Creamos el elemento donde mostramos el resultado
var result = document.createElement("div");

/*INTRODUCIMOS LOS ELEMENTOS 
 que creamos dentro del div contenedor que está en mi index.html
*/

contenedor.appendChild(valoruno);
contenedor.appendChild(valordos);
contenedor.appendChild(result);
contenedor.appendChild(btn_calcular);

/*IMPLEMENTAMOS LA FUNCIONALIDAD DEL BOTON*/

btn_calcular.onclick = calcular

function calcular(){/*Asignamos la función calcular() al método onclick del elemento
										 btn_calcular*/
	//Creamos dos variables locales que guardan los valores que se reciben del usuario
	var a = parseInt(valoruno.value);//La función parseInt() convierte a entero las cadenas 
	var b = parseInt(valordos.value);//de caracteres que entran al input y obtenemos los valores con .value
	var resultado = a + b;//Hacemos el cálculo
	
	
	result.innerHTML = resultado;// Guardamos el resultado en el div result
}


// /*IMPLEMENTAMOS LA FUNCIONALIDAD DEL BOTON*/
// var calcular = function (){/*Asignamos la función calcular() al método onclick del elemento
// 										 btn_calcular*/
// 	//Creamos dos variables locales que guardan los valores que se reciben del usuario
// 	var a = parseInt(valoruno.value);//La función parseInt() convierte a entero las cadenas 
// 	var b = parseInt(valordos.value);//de caracteres que entran al input y obtenemos los valores con .value
// 	var resultado = a + b;//Hacemos el cálculo
	
	
// 	result.innerHTML = resultado;// Guardamos el resultado en el div result
// }

// btn_calcular.onclick = calcular


// /*IMPLEMENTAMOS LA FUNCIONALIDAD DEL BOTON*/
// btn_calcular.onclick = function (){/*Asignamos la función calcular() al método onclick del elemento
// 										 btn_calcular*/
// 	//Creamos dos variables locales que guardan los valores que se reciben del usuario
// 	var a = parseInt(valoruno.value);//La función parseInt() convierte a entero las cadenas 
// 	var b = parseInt(valordos.value);//de caracteres que entran al input y obtenemos los valores con .value
// 	var resultado = a + b;//Hacemos el cálculo
	
	
// 	result.innerHTML = resultado;// Guardamos el resultado en el div result
// }



