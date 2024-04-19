class deber{
    //1.	Pedir al usuario su nombre y saludarlo.
    nombre(){
        let nombre = prompt("porfavor ingrese su nombre");
        console.log ("hola mucho gusto " + nombre);
    }
    //2.	Pedir dos palabras y presentarlas concatenadas
    concatenadas(){
        let pal1 = prompt("porfavor ingrese una palabra");
        let pal2 = prompt("porfabor ingrese otra palabra");
        resp= pal1 + " " + pal2;
        console.log(resp);

    }
    //3.	Solicitar al usuario dos números y mostrar su suma.
    SumaDEdosNumeros(){
        let num1 = prompt("porfavor ingrese un numero");
        let num2 = prompt("porfavor ingrese otro numero");
        resp= num1 + num2;
        console.log("la respuesta de la suma "+num1+"+", + num2+ "="+ resp);
    }
    //4.	Pedir al usuario un número y mostrar su doble.
    Doble(){
        let numero = prompt ("ingrese un numero");
        resp = numero *2;
        console.log("el doble del numero "+numero+ "es" + resp);
    }

    //5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
    EdadDelProximoAño(){
        let edadactial = prompt("ingrese su edad actual");
        proximo = edadactial + 1;
        console.log("la edad q usted tendra el proximo año es de "+ proximo);

    }
    //6.	Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
    MultiplicarDos(){
        let num1 = prompt ("ingrese un numero");
        let num2 = prompt("ingrese otro numero");
        resp = num1 * num2
        console.log(num1+ "*"+ num2 + "=" + resp);

    }
    //7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
    Celsius(){
        let Celsius = prompt("ingrese grados Celsius");
        f = (Celsius*9/5)+32;
        console.log("grados Celsius de " +Celsius + "°c  a grados Fahrenheit es de "+f+"°F");
    }
    //8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
    repetir(){
        let nombre = prompt("ingrese su nombre");
        for(let i= 0;i <3;i++){
        console.log(nombre);
        }
    }
    //9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
    tabla(){
        let tabla = prompt("ingrese un numero de la tabla de multiplicar");
        for (let i= 0;i <= 10;i++){
            resp = i * tabla
            console.log(tabla + "x" + i + "=" + resp)
        }
    }
    //10.	Pedir al usuario dos números y mostrar el mayor.
    mayornumero(){
        let num1 = prompt("ingrese un numero")
        let num2 = prompt("ingrese otro numero")
        if (num1>num2){
            console.log ("numero mayor es "+ num1)

        }
        else{
            console.log ("numero mayor es "+ num2)
        }
    }
    //11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.
    metrosAcentimetros(){
      
        let metros = prompt("ingrese cantidad de metros")
        resp= metros * 100
        console.log(metros +" metros tiene "+ resp+" centometro")

    }


    
    
}
const arr = new deber()