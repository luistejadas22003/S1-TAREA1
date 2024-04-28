   //1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
  function mayorOmenor(){
        let num = prompt("ingrese un numero")
        if (num ==10 ){
            console.log("el numero ",num, " es igual a la base")
        }

        if (num > 10 ){
            console.log("el numero ",num, " es mayor a 10")
        }
        else{
            console.log("el numero ",num, " es menor a 10")
        }
    }
    //2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
   function mayordeedad(){
        let num = prompt("ingrese su edad ")
        if (num ==18 || num > 18 ){
            console.log("usted es mayor de edad")
        }
        else{
            console.log("usted es menor de edad")
        }
    }
    //3.	Pedir al usuario un número y mostrar si es par o impar.
   function ParOimpar(){
        let num = prompt("ingrese un numero:")
        resp = num%2
        if (resp = 0 ){
            console.log("el numero " , num , " es un numero par")

        }
        else{
            console.log("el numero ", num ," es impar")
        }
    }

    //4.	Solicitar al usuario un número y mostrar si es positivo o negativo.
   function psOng(){
        let num = prompt("ingrese un numero ramdon:")
        if(num>= 0){
            console.log("el numero ", num , " es un numero positivo")
        }
        else{
            console.log("el numero ", num , " es un numero negativo" )
        }
    }
    //5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
    function igualesOno(){
        let num =prompt("ingrese un numero")
        let num2 = prompt("ingrese otro numero:")
        if(num == num2){
            console.log("el numero " , num , " se repite")
        }
        else{
            console.log("el numero ", num , " es diferente al numero "+num2)
        }
    }
    //6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
    function caracter(){
        let caracter = prompt("ingrese un caracter")
        resp = "aeiouAEIOU".includes(caracter)
        if (resp){
            alert(caracter , " es una vocal ")
        }
        else{
            alert(caracter , "  es un consonante ")
        }
    }
    //7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
   function  nombresIguales(){
        let nom1 = prompt("ingrese un nombre")
        let nom2 = prompt("ingrese otro nombre")
        if (nom1 == nom2){
            console.log(nom1 , " estos nombres son iguales")

        }
        else if(nom1 > nom2){
            console.log(nom1 ," este nombre es mayor q ", nom2)
        }
        else{
            console.log(nom1 ," este nombre es menor q ", nom2)
        }
    }
    //8.	Pedir al usuario un número y mostrar si es múltiplo de 3
    function Multiplo3(){
        let num= prompt("ingrese un numero ")
        resp = num%3
        if (resp == 0){
            console.log("el numero ", num ," es multiplo de 3")
 
        }
        else{
            console.log("el numero ", num ," no es multiplo de 3")
        }
    }
    //9.	Solicitar al usuario un número y mostrar si es divisible por 2.
   function dibisible2(){
        let num= prompt("ingrese un numero ")
        resp = num%2
        if (resp == 0){
            console.log("el numero ", num ," es divisible por 2")
 
        }
        else{
            console.log("el numero ", num ," no divisible por 2")

        }

    }
    //10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
   function igual100(){


    let num1 = prompt("Ingrese un número");

    if (num1 == 100) {
       alert(num1 , " es igual a 100");
    } else if (num1 > 100) {
       alert(num1 , " es mayor que 100");
    } else {
       alert(num1 , " es menor que 100");
    }
    }


   // 12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
   function total(){
    let monton = prompt("ingrese el valor total de la factura:")
    let iva = prompt("ingrese el valor del iva agregado:")
    mul = monton* iva
    total = mul + monton
    console.log(total)
   }

    //14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
    function aprobar(){
        let nota = prompt("ingrese su calificacion ")
        if (nota>= 60){
            console.log("usted aprobo con la calificacion de "+ nota)
        }
        else{
            console.log("usted reprobo con la calificacion de "+ nota )
        }
    }

    //15.	Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. 
    //Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
    function vehiculo(){
        let precioVenta = parseFloat(prompt("Ingrese el precio de venta del vehículo:"));
        let anoFabricacion = parseInt(prompt("Ingrese el año de fabricación del vehículo:"));

        if (anoFabricacion < 2010) {
            let descuento = precioVenta * 0.10;
            let precioFinal = precioVenta - descuento;
            console.log("El precio final con descuento es: $" , precioFinal.toFixed(2));
        } else {
           console.log("El precio final sin descuento es: $" , precioVenta.toFixed(2));
        }

    }

    //16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. 
    //Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
    function SUELDO(){
        let sueldo = prompt("ingrese dueldo mensual")
        sueldoanual = sueldo * 12
        iva = 0.0
      total= 0
        if (sueldoanual>30.000){
            iva = 0.15
            impuesto= sueldoanual * iva
            total = sueldoanual + impuesto
        }
        console.log("sueldo mensual es de: "+ sueldo)
        console.log("sueldo anual es de :  "+ sueldoanual.toFixed(2))
        console.log("el iva aplicado es de:"+ iva)
        if (sueldoanual > total ){
            console.log("el total es de:   "+sueldoanual.toFixed(2))

        }
        else{
            console.log("el total es de:   "+total.toFixed(2))
          
        }

    }





    //17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. 
    //Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, 
    //considerando lo siguiente:
    //Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
    //Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.Realice un algoritmo para determinar la ganancia obtenida.
    function precio(){
        let tipoBanano = 'A'
        let tamañoBanano = 2
        let precioInicial = 10

        if (tipoBanano === 'A') {
         if (tamañoBanano === 1) {
             precioInicial += 2
         } else if (tamañoBanano === 2) {
             precioInicial += 3
            }
        } else if (tipoBanano === 'B') {
         if (tamañoBanano === 1) {
             precioInicial -= 3
            } else if (tamañoBanano === 2) {
             precioInicial -= 5
            }
        }

        let gananciaTotal = precioInicial;
        console.log("La ganancia obtenida por el productor es: $" + gananciaTotal.toFixed(2))

    }

    


    //18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
    //El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00. 
    // Para más de 200 personas el costo por platillo es de $10.00.
    //Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, 
    //considerando que al total hay que agregarle el 15% del iva
    function somosmas(){
        let numeroPersonas = prompt("ingrese un valor"); // Número de personas para el evento

        let costoPorPersona;

        if (numeroPersonas <= 100) {
            costoPorPersona = 20;
        } else if (numeroPersonas <= 200) {
            costoPorPersona = 15;
        } else {
            costoPorPersona = 10;
        }

        let costoTotal = numeroPersonas * costoPorPersona;
        let iva = costoTotal * 0.15;
        let presupuestoTotal = costoTotal + iva;

        console.log("El presupuesto total para el evento es: $" + presupuestoTotal.toFixed(2));

    }






    //19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
    function elemento(){
        let arreglo = [5, 10, 15, 20, 25]; // Ejemplo de un arreglo de 5 elementos

        if (arreglo[0] > arreglo[4]) {        
            console.log("El primer elemento es mayor que el último elemento.");
        } else {
            console.log("El primer elemento no es mayor que el último elemento.");
        }

    }



    //20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.

    function elemento2(){
        let arreglo = [5, 10, 15, 20, 25]; // Ejemplo de un arreglo de 5 elementos

        a = arreglo[0]%2
        b = arreglo[0]%2

        if (a  == 0 ) {        
            console.log("El primer elemento es par");
        } else {
            console.log("El primer elemento no es par");
        }
        if (b  == 0 ) {        
            console.log("El ultimo elemento no es impar");
        } else {
            console.log("El ultimo elemento  es impar");
        }

    }


    //21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
    function mayor(){
        let arreglo =[12,3,8]
        mayor = 0
        if (arreglo[0]>mayor  ){
            mayor = arreglo[0]


        } if(arreglo[1]> mayor) {
            mayor = arreglo [1]


        } if(arreglo [2]> mayor){
            mayor = arreglo[2]


        }
            console.log("el mayor es ", mayor)

        
    }


    //22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos
    function sumadearreglo(){
        let arreglo=[50,10,11,21,5]
       suma = arreglo[0]+arreglo[1]+arreglo[2]+arreglo[3]+arreglo[4]
       console.log(suma)    }


mayorOmenor()
mayordeedad()
ParOimpar()
psOng()
igualesOno()
caracter()
nombresIguales()
Multiplo3()
dibisible2()
igual100()
total()
aprobar()
vehiculo()
aprobar()
vehiculo()
SUELDO()
precio()
somosmas()
elemento()
elemento2()
mayor()
sumadearreglo()
