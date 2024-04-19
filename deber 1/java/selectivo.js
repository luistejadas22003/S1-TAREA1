class selectiv {
    //1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
    mayorOmenor(){
        let num = prompt("ingrese un numero")
        if (num ==10 ){
            console.log("el numero "+num+ " es igual a la base")
        }

        if (num > 10 ){
            console.log("el numero "+num+ " es mayor a 10")
        }
        else{
            console.log("el numero "+num+ " es menor a 10")
        }
    }
    //2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
    mayordeedad(){
        let num = prompt("ingrese su edad ")
        if (num ==18 || num > 18 ){
            console.log("usted es mayor de edad")
        }
        else{
            console.log("usted es menor de edad")
        }
    }


}
const arr = new selectiv()