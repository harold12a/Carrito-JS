const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

alert("BIENVENIDOS A BOUTIQUE AK, EN NUESTRA WEB PUEDES REALIZAR TUS CUENTAS ANTES DE COMPRAR OPTIMIZANDO TU TIEMPO VALIOSO ")
alert("¿INDICA EL NÚMERO DE LA OPERACIÓN QUE VAS A REALIZAR? O PULSA ACEPTAR PARA SALTAR EL PROCESO ")
operacion = prompt("1: sumar, 2: restar, 3: dividir, 4: multiplicar");


if (operacion == 1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = sumar(numero1, numero2)
    alert(`tu resultado es ${resultado}`);
} else if (operacion == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = restar(numero1, numero2)
    alert(`tu resultado es ${resultado}`);
} else if (operacion == 3) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = dividir(numero1, numero2)
    alert(`tu resultado es ${resultado}`);
} else if (operacion == 4) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = multiplicar(numero1, numero2)
    alert(`TU RESULTADO ES ${resultado}`);
} else {
    ("no se ha encontrado la operacion seleccionada")
}

while (true) {
    dineroUsuario = prompt("AHORA QUE HAS REALIZADO TUS CUENTAS INDÍCANOS EL VALOR ESTIMADO PARA LA COMPRA NUESTRA PÁGINA TE GUIARA A LA SECCIÓN INDICADA");


    if (dineroUsuario >= 10000 && dineroUsuario < 50000) {
        alert("VISITA NUESTRA PÁGINA DE ACCESORIOS NUESTRA TIENDA SE AJUSTA A TU PRESUPUESTO ")
        alert("NO OLVIDES ESCRIBIRME AL WHATSAPP # 3159285479 PREGUNTA POR TU ACCESORIO FAVORITO")
        class boutiqueak {
            constructor(valor, tamaño, estilo, antialergicos, color) {
                this.valor = valor;
                this.tamaño = tamaño;
                this.estilo = estilo;
                this.antialergicos = antialergicos;
                this.color = color;
                this.info = ` ${this.valor} <br>  ${this.tamaño} <br> ${this.estilo} <br>  ${this.antialergicos} <br>
                     ${this.color}`
            }
            verInfo = () => {
                document.write(this.info);
            }

        }


        const Boutiqueak = new boutiqueak("<b>Nuestros accesorios tiene un valor inicial de $10.000 pesos </b> ", "<b>Tamaños: Pequeños, Medianos, Grandes </b>",
            "<b>Estilo: artesanles y industriales</b>", "<b>Antialergicos: si/no </b>", "<b>Colores: Platiado, Dorado, Gris; Rojo</b>" + "<br>");

        Boutiqueak.verInfo();

        const obtenerInformacion = (articulo) => {
            articulos = {
                codigo0001: ["$15.000", " plastico", " gris", " woman", " men", " porta reloj", " capaciadad de 8 unds"],
                codigo0002: ["$20.000", " industrial", " dorado", "pequeños"],
                codigo0003: ["$25.000", " artesanal", " dorados con piedra", " medianos"],
                codigo0004: ["$20.000", " industrial", " dorados", " medianos"],
                codigo0005: ["$20.000", " industrial", " platiados", " medianos"],
                codigo0006: ["$18.000", " industrial", " dorados", " pequeños"],
                codigo0007: ["$18.000", " industrial", " dorados", " pequeños"],
                codigo0008: ["$18.000", " industrial", " dorados", " medianos"],
                codigo0009: ["$25.000", " industrial", " dorados brillantes", " grandes"],
                codigo0010: ["$30.000", " industrial", " dorados", "grandes", "antialergicos"],
                codigo0011: ["$30.000", " industrial", " dorados", " grandes", "antialergicos"],
                codigo0012: ["$35.000", " industrial", " dorados brillantes", "rosado brillantes", "platiado brillantes", "antialergicos", " grandes"],
                codigo0013: ["$15.000", " industrial", " dorados y rojos", " medianos"],
                codigo0014: ["$15.000", " industrial", " dorados", "medianos"],
                codigo0015: ["$15.000", " industrial", " dorados brillantes", " grandes"],
                codigo0016: ["$45.000", " artesanal", " dorados", "canicas de colores", " grandes"],
                codigo0017: ["$50.000", " industrial", " dorados", " grandes"],
                codigo0018: ["$30.000", " industrial", " dorados brillantes", " grandes"],
                codigo0019: ["$30.000", " industrial", " dorados brillantes", " grandes"],
                codigo0020: ["$30.000", " industrial", " dorados brillantes", " grandes"],
                codigo0021: ["$30.000", " industrial", " dorados brillantes", " grandes"]


            }
            if (articulos[articulo] !== undefined) {
                return [articulos[articulo], articulo];
            } else {
                return false;
            }
        }

        const mostrarInfromacion = (articulo) => {
            let informacion = obtenerInformacion(articulo);



            if (informacion !== false) {

                let valor = obtenerInformacion(articulo)[0][0];
                let Descripción = obtenerInformacion(articulo)[0];
                Descripción.shift();


                document.write(`<b style="color:red"> Valor del articulo de Accesorio </b> <b style="color:red">${informacion[1]}</b>: <b>${valor}</b><br><br>
            <b style="color:red"> Descripción del articulo: </b>${Descripción}<br><br>`)
            }
        }

        mostrarInfromacion("codigo0001");
        mostrarInfromacion("codigo0002");
        mostrarInfromacion("codigo0003");
        mostrarInfromacion("codigo0004");
        mostrarInfromacion("codigo0005");
        mostrarInfromacion("codigo0006");
        mostrarInfromacion("codigo0007");
        mostrarInfromacion("codigo0008");
        mostrarInfromacion("codigo0009");
        mostrarInfromacion("codigo0010");
        mostrarInfromacion("codigo0011");
        mostrarInfromacion("codigo0012");
        mostrarInfromacion("codigo0013");
        mostrarInfromacion("codigo0014");
        mostrarInfromacion("codigo0015");
        mostrarInfromacion("codigo0016");
        mostrarInfromacion("codigo0017");
        mostrarInfromacion("codigo0018");
        mostrarInfromacion("codigo0019");
        mostrarInfromacion("codigo0020");
        mostrarInfromacion("codigo0021");



        alert("en console encontras todos los valores de los accesorios".toUpperCase())

        const valores = [
            { codigo: "#0001", valor: 15000 },
            { codigo: "#0002", valor: 20000 },
            { codigo: "#0003", valor: 25000 },
            { codigo: "#0004", valor: 20000 },
            { codigo: "#0005", valor: 20000 },
            { codigo: "#0006", valor: 18000 },
            { codigo: "#0007", valor: 18000 },
            { codigo: "#0008", valor: 48000 },
            { codigo: "#0009", valor: 25000 },
            { codigo: "#0010", valor: 30000 },
            { codigo: "#0011", valor: 30000 },
            { codigo: "#0012", valor: 35000 },
            { codigo: "#0013", valor: 15000 },
            { codigo: "#0014", valor: 14000 },
            { codigo: "#0015", valor: 15000 },
            { codigo: "#0016", valor: 45000 },
            { codigo: "#0017", valor: 50000 },
            { codigo: "#0018", valor: 30000 },
            { codigo: "#0019", valor: 30000 },
            { codigo: "#0020", valor: 30000 },
            { codigo: "#0021", valor: 30000 }

        ]


        const baratos = valores.filter(a => a.valor <= 30000)
        const caros = valores.filter(a => a.valor > 30000)


        console.log("los valores  de nuestros accesorios economicos oscilan entre $10.000 & $30.000", baratos)
        console.log("los valores de nuestros accesorios  $30.000 & $50.000", caros)


    } else if (dineroUsuario >= 50000 && dineroUsuario < 70000) {
        alert("GENIAL CONTINUA A LA PÁGINA DE LOCIONES TENEMOS LO QUE ESTÁS BUSCANDO ")
        alert("NO OLVIDES ESCRIBIRME AL WHATSAPP # 3159285479 PREGUNTA POR TU LOCION FAVORITO")

        class boutiqueak {
            constructor(valor, presentacion, onzas, fragancia, men, woman) {
                this.valor = valor;
                this.presentacion = presentacion;
                this.onzas = onzas;
                this.fragancia = fragancia;
                this.men = men;
                this.woman = woman;

                this.info = ` ${this.valor} <br>  ${this.presentacion} <br> ${this.onzas} <br>  ${this.fragancia} <br>
                 <br> ${this.men} <br> ${this.woman}`
            }
            verInfo = () => {
                document.write(this.info);
            }

        }


        const Boutiqueak = new boutiqueak("<b>Nuestras lociones tiene un valor inicial de $50.000 pesos </b> ", "<b>Presentacion: Vidrio y Plastico </b>",
            "<b>Onzas: 3.3FL.Oz - 1000 ml </b>", "<b>fragancias: Dulces , Acidas , fuertes , suaves. </b>", "<b>Men : si</b>", " <b>Woman: si</b>" + "<br>");



        Boutiqueak.verInfo();

        alert("en console encontras todos los valores de nuestras lociones".toUpperCase())

        const valores = [
            { codigo: "#0001", valor: 60000 },
            { codigo: "#0002", valor: 52000 },
            { codigo: "#0003", valor: 53000 },
            { codigo: "#0004", valor: 61000 },
            { codigo: "#0005", valor: 55000 },
            { codigo: "#0006", valor: 70000 },
            { codigo: "#0007", valor: 59000 },
            { codigo: "#0008", valor: 59000 },
            { codigo: "#0009", valor: 70000 },
            { codigo: "#0010", valor: 65000 },
            { codigo: "#0011", valor: 52000 },
            { codigo: "#0012", valor: 50000 },
            { codigo: "#0013", valor: 56000 },
            { codigo: "#0014", valor: 62000 },
            { codigo: "#0015", valor: 68000 },
            { codigo: "#0016", valor: 62000 },
            { codigo: "#0017", valor: 68000 },
            { codigo: "#0018", valor: 55000 },
            { codigo: "#0019", valor: 55000 },
            { codigo: "#0020", valor: 68000 },
            { codigo: "#0021", valor: 58000 },
            { codigo: "#0022", valor: 60000 },
            { codigo: "#0023", valor: 52000 },
            { codigo: "#0024", valor: 53000 },
            { codigo: "#0025", valor: 51000 },
            { codigo: "#0026", valor: 55000 },
            { codigo: "#0027", valor: 58000 },
            { codigo: "#0028", valor: 59000 },
            { codigo: "#0029", valor: 59000 },
            { codigo: "#0030", valor: 60000 },
            { codigo: "#0031", valor: 55000 },
            { codigo: "#0032", valor: 62000 },
            { codigo: "#0033", valor: 55000 },
            { codigo: "#0034", valor: 69000 },
            { codigo: "#0035", valor: 62000 },
            { codigo: "#0036", valor: 68000 },
            { codigo: "#0037", valor: 62000 },
            { codigo: "#0038", valor: 68000 },
            { codigo: "#0039", valor: 60000 },
            { codigo: "#0040", valor: 65000 },
            { codigo: "#0041", valor: 58000 },
            { codigo: "#0042", valor: 51000 },
            { codigo: "#0043", valor: 60000 },
            { codigo: "#0044", valor: 52000 },
            { codigo: "#0045", valor: 53000 },
            { codigo: "#0046", valor: 51000 },
            { codigo: "#0047", valor: 55000 },
            { codigo: "#0048", valor: 58000 },
            { codigo: "#0049", valor: 59000 },
            { codigo: "#0050", valor: 59000 },
            { codigo: "#0051", valor: 50000 },
            { codigo: "#0052", valor: 55000 },
            { codigo: "#0053", valor: 52000 },
            { codigo: "#0054", valor: 55000 },
            { codigo: "#0055", valor: 59000 },
            { codigo: "#0056", valor: 52000 },
            { codigo: "#0057", valor: 58000 },
            { codigo: "#0058", valor: 52000 },
            { codigo: "#0059", valor: 58000 }


        ]


        const baratos = valores.filter(a => a.valor <= 60000)
        const caros = valores.filter(a => a.valor > 60000)


        console.log("valores de nuestras lociones estan entre $50.000 & $60.000", baratos)
        console.log("valores de nuestras lociones estan entre $60.000 & $70.000", caros)




    } else if (dineroUsuario >= 70000 && dineroUsuario < 100000) {
        alert("CORRE VISITA NUESTRA PÁGINA DE BOLSOS  TENEMOS GRAN VARIEDAD LO ÚLTIMO EN MODA")
        alert("NO OLVIDES ESCRIBIRME AL WHATSAPP # 3159285479 PREGUNTA POR TU BOLSO FAVORITO")
        class boutiqueak {
            constructor(valor, moda, estilo, impermeable, color) {
                this.valor = valor;
                this.moda = moda;
                this.estilo = estilo;
                this.impermeable = impermeable;
                this.color = color;
                this.info = ` ${this.valor} <br>  ${this.moda} <br> ${this.estilo} <br>  ${this.impermeable} <br>
                 ${this.color}`
            }
            verInfo = () => {
                document.write(this.info);
            }

        }


        const Boutiqueak = new boutiqueak("<b>Nuestros bolsos tiene un valor inicial de $70.000 pesos </b> ", "<b> Manejamos todas las modas para tus ocaciones especiales</b>",
            "<b>Estilo artesanles y industriales</b>", "<b>Impermeable: si/no</b>", "<b>Todos los colores</b>" + "<br>");



        Boutiqueak.verInfo();

        alert("en console encontras todos los valores de nuestros Bolsos".toUpperCase())

        const valores = [
            { codigo: "#0001", valor: 70000 },
            { codigo: "#0002", valor: 72000 },
            { codigo: "#0003", valor: 73000 },
            { codigo: "#0004", valor: 81000 },
            { codigo: "#0005", valor: 85000 },
            { codigo: "#0006", valor: 80000 },
            { codigo: "#0007", valor: 89000 },
            { codigo: "#0008", valor: 99000 },
            { codigo: "#0009", valor: 98000 },
            { codigo: "#0010", valor: 100000 },
            { codigo: "#0011", valor: 82000 },
            { codigo: "#0012", valor: 70000 },
            { codigo: "#0013", valor: 76000 },
            { codigo: "#0014", valor: 72000 },
            { codigo: "#0015", valor: 88000 },
            { codigo: "#0016", valor: 82000 },
            { codigo: "#0017", valor: 98000 },
            { codigo: "#0018", valor: 75000 },
            { codigo: "#0019", valor: 75000 },
            { codigo: "#0020", valor: 78000 },
            { codigo: "#0021", valor: 78000 },
            { codigo: "#0022", valor: 70000 },
            { codigo: "#0023", valor: 82000 },
            { codigo: "#0024", valor: 93000 },
            { codigo: "#0025", valor: 81000 },
            { codigo: "#0026", valor: 95000 },
            { codigo: "#0027", valor: 98000 }


        ]



        const baratos = valores.filter(a => a.valor <= 90000)
        const caros = valores.filter(a => a.valor > 90000)


        console.log("valores de nuestros Bolsos los encuentras entre $70.000 & $85.000", baratos)
        console.log("valor de nuestros Bolsos los encuentras entre $85.000 & $100.000", caros)


    } else if (dineroUsuario >= 100000 && dineroUsuario < 150000) {
        alert("Tenemos gran variedad en esta seccion vista nuestra paguina de pintas ")
        alert("no olvides escribirme al whatsapp # 3159285479 pregunta por tu pinta favorita")

        class boutiqueak {
            constructor(valor, tela, color, talla, men, woman) {
                this.valor = valor;
                this.tela = tela;
                this.color = color;
                this.talla = talla;
                this.men = men;
                this.woman = woman;

                this.info = ` ${this.valor} <br>  ${this.tela} <br> ${this.color} <br>  ${this.talla} <br>
                 <br> ${this.men} <br> ${this.woman}`
            }
            verInfo = () => {
                document.write(this.info);
            }

        }


        const Boutiqueak = new boutiqueak("<b>Nuestras pintas tiene un valor inicial de $100.000 pesos </b> ", "<b>Tela: Algodon 100% </b>",
            "<b> Todos los colores </b>", "<b>Talla : Small ! S !, Medium ! M !, Large ! L !, </b>", "<b>Men : si</b>", " <b>Woman: si</b>" + "<br>");



        Boutiqueak.verInfo();

        alert("en console encontras todos los valores de nuestras pintas".toUpperCase())

        const valores = [
            { codigo: "#0001", valor: 150000 },
            { codigo: "#0002", valor: 122000 },
            { codigo: "#0003", valor: 143000 },
            { codigo: "#0004", valor: 100000 },
            { codigo: "#0005", valor: 120000 },
            { codigo: "#0006", valor: 100000 },
            { codigo: "#0007", valor: 139000 },
            { codigo: "#0008", valor: 100000 },
            { codigo: "#0009", valor: 100000 },
            { codigo: "#0010", valor: 100000 },
            { codigo: "#0011", valor: 100000 },
            { codigo: "#0012", valor: 150000 },
            { codigo: "#0013", valor: 120000 },
            { codigo: "#0014", valor: 120000 },
            { codigo: "#0015", valor: 100000 },
            { codigo: "#0016", valor: 100000 },
            { codigo: "#0017", valor: 128000 },
            { codigo: "#0018", valor: 125000 },
            { codigo: "#0019", valor: 145000 },
            { codigo: "#0020", valor: 150000 },
            { codigo: "#0021", valor: 150000 },
            { codigo: "#0022", valor: 150000 },
            { codigo: "#0023", valor: 120000 },
            { codigo: "#0024", valor: 133000 },
            { codigo: "#0025", valor: 130000 },
            { codigo: "#0026", valor: 130000 },
            { codigo: "#0027", valor: 100000 },
            { codigo: "#0028", valor: 105000 },
            { codigo: "#0029", valor: 115000 },
            { codigo: "#0030", valor: 110000 },
            { codigo: "#0031", valor: 118000 },
            { codigo: "#0032", valor: 111000 },
            { codigo: "#0033", valor: 102000 },
            { codigo: "#0034", valor: 100000 },
            { codigo: "#0035", valor: 155000 },
            { codigo: "#0036", valor: 102000 },
            { codigo: "#0037", valor: 136000 },
            { codigo: "#0038", valor: 100000 },
            { codigo: "#0039", valor: 100000 },
            { codigo: "#0040", valor: 100000 },
            { codigo: "#0041", valor: 130000 },
            { codigo: "#0042", valor: 155000 },
            { codigo: "#0043", valor: 100000 },
            { codigo: "#0044", valor: 120000 },
            { codigo: "#0045", valor: 100000 },
            { codigo: "#0046", valor: 125000 },
            { codigo: "#0047", valor: 100000 },
            { codigo: "#0048", valor: 100000 },
            { codigo: "#0049", valor: 150000 },
            { codigo: "#0050", valor: 136000 },
            { codigo: "#0051", valor: 120000 },
            { codigo: "#0052", valor: 100000 },
            { codigo: "#0053", valor: 100000 },
            { codigo: "#0054", valor: 145000 },
            { codigo: "#0055", valor: 100000 },
            { codigo: "#0056", valor: 100000 },
            { codigo: "#0057", valor: 100000 },
            { codigo: "#0058", valor: 100000 }

        ]


        const baratos = valores.filter(a => a.valor <= 120000)
        const caros = valores.filter(a => a.valor > 120000)


        console.log("valores de nuestras pintas estan entre $100.000 & $120.000", baratos)
        console.log("valores de nuestras pintas estan entre $120.000 & $150.000", caros)



    } else if (dineroUsuario >= 150000 && dineroUsuario < 200000) {
        alert("Estupendo visita nuestra paguina de colecciones o billeteras tenemos la ultima moda a tu servicio  ")
        alert("no olvides escribirme al whatsapp # 3159285479 pregunta por tu colecciones o billeteras favorito")

        class boutiqueak {
            constructor(valor, material, color, estilo, men, woman) {
                this.valor = valor;
                this.material = material;
                this.color = color;
                this.estilo = estilo;
                this.men = men;
                this.woman = woman;

                this.info = ` ${this.valor} <br>  ${this.material} <br> ${this.color} <br>  ${this.estilo} <br>
                 <br> ${this.men} <br> ${this.woman}`
            }
            verInfo = () => {
                document.write(this.info);
            }

        }


        const Boutiqueak = new boutiqueak("<b>Nuestras colecciones y billeteras tiene un valor inicial de $150.000 pesos </b> ", "<b> Material: Plastico, Acero, Lona , Cuerina </b>",
            "<b> Todos los colores </b>", "<b> Estilo: Informal </b>", "<b>Men : si</b>", " <b>Woman: si</b>" + "<br>");



        Boutiqueak.verInfo();

        alert("en console encontras todos los valores de nuestras billeteras".toUpperCase())

        const valores = [
            { codigo: "#0001", valor: 150000 },
            { codigo: "#0002", valor: 200000 },
            { codigo: "#0003", valor: 153000 },
            { codigo: "#0004", valor: 200000 },
            { codigo: "#0005", valor: 150000 },
            { codigo: "#0006", valor: 190000 },
            { codigo: "#0007", valor: 189000 },
            { codigo: "#0008", valor: 159000 },
            { codigo: "#0009", valor: 168000 },
            { codigo: "#0010", valor: 200000 },
            { codigo: "#0011", valor: 200000 },
            { codigo: "#0012", valor: 200000 },
            { codigo: "#0013", valor: 150000 },
            { codigo: "#0014", valor: 150000 },
            { codigo: "#0015", valor: 150000 },
            { codigo: "#0016", valor: 150000 },
            { codigo: "#0017", valor: 158000 },
            { codigo: "#0018", valor: 155000 },
            { codigo: "#0019", valor: 155000 },
            { codigo: "#0020", valor: 150000 },
            { codigo: "#0021", valor: 150000 },
            { codigo: "#0022", valor: 150000 },
            { codigo: "#0023", valor: 180000 },
            { codigo: "#0024", valor: 183000 },
            { codigo: "#0025", valor: 250000 },
            { codigo: "#0026", valor: 180000 },
            { codigo: "#0027", valor: 180000 },
            { codigo: "#0028", valor: 175000 },
            { codigo: "#0029", valor: 200000 },
            { codigo: "#0030", valor: 150000 },
            { codigo: "#0031", valor: 168000 },
            { codigo: "#0032", valor: 161000 },
            { codigo: "#0033", valor: 182000 },
            { codigo: "#0034", valor: 200000 },
            { codigo: "#0035", valor: 155000 },
            { codigo: "#0036", valor: 152000 }


        ]


        const baratos = valores.filter(a => a.valor <= 170000)
        const caros = valores.filter(a => a.valor > 170000)


        console.log("valores de nuestras billeteras estan entre $150.000 & $170.000", baratos)
        console.log("valores de nuestras lociones estan entre $170.000 & $200.000", caros)


    } else if (dineroUsuario >= 200000) {
        alert("Eres nuestro cliente VIP recorre toda la tienda virtual")
        alert("escribirme al whatsapp # 3159285479 juntos haremos la compra")

        class boutiqueak {
            constructor(bolsos, lociones, accesorios, colecciones, pintas, billeteras) {
                this.bolsos = bolsos;
                this.lociones = lociones;
                this.accesorios = accesorios;
                this.colecciones = colecciones;
                this.pintas = pintas;
                this.billeteras = billeteras;

                this.info = ` ${this.bolsos} <br> <br>  ${this.lociones} <br> <br> ${this.accesorios} <br> <br> ${this.colecciones} <br> <br>
                ${this.pintas} <br> <br> ${this.billeteras}`
            }
            verInfo = () => {
                document.write(this.info);
            }

        }


        const Boutiqueak = new boutiqueak("<b>VISTA CADA SECCIÓN DE NUESTRAS PLATAFORMA CONTAMOS CON:</b>", "<b> Bolsos: 120 unidades </b> ", "<b>Lociones: 50 unidades </b>",
            "<b>Accesorios: 200 unidades </b>", "<b>Colecciones 45 unidaes</b>", "<b>Pintas : 80 unidades</b>", " <b>Billeteras: 95 unidaes</b>", );



        Boutiqueak.verInfo();
    } else {
        alert("TIENES POCO DINERO PERO NO TE PREOCUPES ESTAS EN LA TIENDA INDICADA PARA TODOS. ESCRÍBEME AL WHATSAPP # 3159285479 TE AYUDARE CON TU COMPRA")
    }
    const seguir = prompt(`QUIERES IR A OTRAS SECCIÓN DIFERENTE (si/no)`).toLocaleLowerCase()
    if (seguir != "si") break
}