console.log("Hola Mundo!!!");
/*Imprime informacion por consola*/

var num1=52;
var num2=45;
console.log(num1+num2);
/*para definir una variable debo usar la palabra reservada var*/

var nom="Diego" //Variable texto
var ape="Ortiz"
console.log(nom);
console.log(ape);

/*booleanos*/
var tiene_mascota=true;
tiene_mascota=false;


/*Arrays*/
var frutas=['Pera','Manzana','Lulo',25,true];
console.log(frutas[3]);

/*Objeto*/
var persona={
	nombre:"Diego",
	edad:32,
	tiene_mascota:true,
	mascota:{
		raza:'Dalmata',
		nombre:'Bigotes'
	}
};
console.log(persona['nombre']);//op1
console.log(persona.edad);//op2
console.log(persona.mascota.raza);//op3

var fecha=new Date();
console.log(fecha);

/*Operador and &&*/
console.log(true && true);

/*Operador or ||*/
console.log(true || false);

/*Negacion*/
console.log(!false);

/*Modulo*/
console.log(5%4);

/*Operadores Relacionales*/
console.log(6<3);
console.log(6==6);
console.log(6!=5);

/*Estructuras, if else, condiciones*/

var edad=25;
if(edad>=18){
	console.log('Eres mayor de edad!!!')

}else{
	console.log('No eres mayor de edad')

}

/*Repeticiones for*/
for(var i=0; i<5; i++){
	console.log(i);

}

//Ejemplo

var dias=['lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
for(var i=0; i<7; i++){
	console.log(dias[i]);
}

/*Funciones*/
function suma(n1,n2) {
	// body...
	var res=n1+n2;
	return res;
}

alert(suma(8,4));

//Ejemplo,
/*Crear una funcion que reciba como parametro*/
function calcular_iva(precio_producto){
	var iva=0.19;
	var resultado=precio_producto*iva;
	return resultado;
}
alert(calcular_iva(10000));

/*Sentencias break y continue*/

var dias=['lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
for(var i=0; i<7; i++){
	console.log(dias[i]);
	if(i==5){
		break;
	}

}

/*DOM, Arbol de nodos*/














