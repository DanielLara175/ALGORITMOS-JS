function saludo() {
    alert("Hello woooooorld")
}
function suma() {
    //Declarmos las variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    //SOLICITAMOS LOS VALORES Y LOS ASIGNAMOS EN LAS VARIABLES
    A = parseInt(prompt("por favor ingrese el primer valor a sumar"));
    B = parseInt(prompt("por favor ingrese el segundo valor"));
    //REALIZAMOS LAS OPERACIONES NECESARIAS
    S = A + B;
    //MOSTRAMOS EL RESULTADO EN PANTALLA
    alert("EL RESULTADO DE LA SUMA ES " + S);
    console.log("El resultado de la suma es" + S);


    
}

function operaciones() {
    //Declaramos las variables
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;
    let F = 0;
    //SOLICITAMOS LOS VALORES Y ASIGNAMOS LAS VARIABLES
    A = parseInt(prompt("por favor ingrese el primer numero"));
    B =  parseInt(prompt("por favor ingrese el segundo numero"));
    //REALIZAMOS LAS OPERACIONES
    C = A + B;
    D = A - B;
    E = A * B;
    F = A / B;
    // MOSTRAMOS EL RESULTADO EN LA PANTALLA
    alert("EL RESULTADO DE LA SUMA ES :" + C);
    alert("EL RESULTADO DE LA RESTA ES :" + D);
    alert("EL RESULTADO DE LA MULTIPLICACION ES :" + E);
    alert("EL RESULTADO DE LA DIVICION ES :" + F);
    
}

function cuadrado() {
    //DECLARAMOS LAS VARIABLES
    let A = 0;
    let B = 0;
    // SOLICITAMOS LOS VALORES
    A = parseInt(prompt("por favor ingrese el valor"));
    //REALIZAMOS LAS OPERACIONES
    B = A * A;
    // MOSTRAMOS RESULTADO
    alert("EL CUADRADO DEL NUMERO ES : " + B);
    
}
function convercion() {
    //DECLARAMOS LAS VARIABLES
    let A = 0;
    let B = 0;
    let C = 0;
    //SOLICITAMOS LOS VALORES
    A = parseInt(prompt("por favor ingrese si valor en metros"));
    //REALIZAMOS LAS OPERACIONES
    B = A * 39,32;
    C = A * 100;
    //MOSTRAMOS RESULTADO
    alert("el resultado en pulgadas es " + B);
    alert("el resultado en centimetros es " + C);
    
}
function pdsn() {
    
 
    //DECLARAMOS VARIABLES
let  A,B,C,D,E,F,G,H = 0;
    //SOLICITAMOS VALORES
    A = parseInt(prompt("ingese la primera nota"));
    B = parseInt(prompt("ingese la segunda nota"));
    C = parseInt(prompt("ingese la tercera nota"));
    D = parseInt(prompt("ingese la cuarta nota"));
    E = parseInt(prompt("ingese la quinta nota"));
    F = parseInt(prompt("ingese la sexta nota"));
    G = parseInt(prompt("ingese la septima nota"));
    //REALIZAMOS OPERACIONES
    H = (A+B+C+D+E+F+G)/7;
    //MOSTRAMOS RESULTADO
    if (H>=6) {
        alert("aprobado con " + H)
    } else {alert("reprobado con " + H)}
    
}

function mayor() {
    //DECLARAMOS VALORES
    let A,B=0;
    //solicitamos valores
    A= parseInt(prompt("ingrese el primer valor"))
    B= parseInt(prompt("ingrese el segundo valor"))
    //REALIZAMOS OPERACIONES
    if (A==B) {
        alert("son iguales")
    } else if (A>B) {
        alert("el numero mayor es " + A)
    } else{
        alert("el numero mayor es " +B)
    }
    
}
function menor() {
    //DECLARAMOS VARIABLES
    let A,B,C=0;
    //SOLICITAMOS VALORES
    A= parseInt(prompt("ingrese el primer valor"))
    B= parseInt(prompt("ingrese el segundo valor"))
    C= parseInt(prompt("ingrese el tercer valor"))
    //REALIZAMOS OPERACIONES Y MOSTRAMOS RESULTADO
    if (A==B && B==C) {
        alert("son iguales")
    }else if (A<B && A<C) {
        alert("el menor es " + A)
    } else if (B<A && B<C) {
        alert("el numero menor es " + B)
    }else{
        alert("el numero menor es " + C)
    }
        
    }

    function pop() {
        let A=0;

    
        A= parseInt(prompt("por favor ingrese el valor"))

        if (A % 2 == 0) {
            alert("es par")
        }else {
            alert("es impar")
        }
        
    }

    function triangulo() {
        let A,B,C=0;

        A=parseInt(prompt("por favor ingrese el valor de la base"))
        C=parseInt(prompt("por favor ingrece el valor de la altura"))

        B= (A * C)/2

        alert("el area de el triangulo es " + B)
    }

    function edad() {
        let A,B,C=0;

        A= parseInt(prompt("ongrese su edad"))
        B= parseInt(prompt("por favor ingrese año actual"))

        C= B-A 

        alert("el año en el que nacio es " + C)
    }
    function cdt() {
        
        let A,B,C,D=0;

        A=parseInt(prompt("igrese capital"))
        D=parseInt(prompt("ingrese el tiempo"))

        C=(A*0.204)*D
        B=A+C

        alert("el total de la ganancia fue " +C)
        alert("el total de lo invertido y la ganacia es:  " + B)
    }
    function fruta() {
        let fruta="";
        let kilos,precio,des,total,totalsindes=0;

        fruta=prompt("por favor ingrese el nombre de la fruta en minusculas")
        kilos=parseInt(prompt("por favor ingrese los kilos"))
        precio=parseInt(prompt("por favor ingrese el precio por kilo"))

        if (fruta === "manzanas") {
            switch (true) {
                case kilos<3:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.02;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 case kilos<6:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.04;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 case kilos<11:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.10;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 default:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.17;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;

            
                
            }
        }

        else if (fruta === "peras") {
            switch (true) {
                case kilos<3:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.03;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 case kilos<6:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.06;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 case kilos<11:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.12;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 default:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.18;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;

            
                
            }
        }

        else if (fruta === "sandias") {
            switch (true) {
                case kilos<3:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.06;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 case kilos<6:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.08;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 case kilos<11:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.15;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;
                 default:
                    totalsindes = precio*kilos;
                    des = totalsindes*0.20;
                    total = totalsindes - des;
                    alert("el usuario debe pagar " + total);
                    alert("el descuento aplicado fue de " + des);
                    
                 break;

            
                
            }
        }
        else("no sea pato ponga la fruta que es")
    }

    
        
  