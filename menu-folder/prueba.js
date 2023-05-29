let arrayPeers = [
"pramos12@ucol.mx",
"bleyzer83845@gmail.com",
"icontreras3@ucol.mx",
"forozco3@ucol.mx",
"cvargas8@ucol.mx",
"rpimienta@ucol.mx3",
"josejulian_rodriguez@ucol.mx",
"aortiz34@ucol.mx",
"sgonzalez34@ucol.mx",
"greyes17@ucol.mx",
"mrizo2@ucol.mx",
"jestrada1@ucol.mx",
"btapia@ucol.mx",
"flopezortega@ucol.mx",
"mavila7@ucol.mx",
"fbriceno@ucol.mx",
"jterriquez0@ucol.mx",
"cluna10@ucol.mx",
"jtenori@ucol.mx",
"dgentner@ucol.mx",
"crodriguez42@ucol.mx",
"ghiguera@ucol.mx",
"allerenas4@ucol.mx",
"jmora12@ucol.mx",
"kmeza@ucol.mx",
"ktovar@ucol.mx",
"mramos29@ucol.mx",
];


let arrayGameplay =[
"rdany81983@gmail.com",
"pao.gaarcia@gmail.com",
"dieggozepedalopez@gmail.com",
"fterrones@ucol.mx",
"asanchez47@ucol.mx",
"jonathaniha1234@gmail.com",
"oarcega@ucol.mx",
"cleon5@ucol.mx",
"jgodinez0@ucol.mx",
"aerj1995@gmail.com",
"alejime95@hotmail.com",
"iponce1@ucol.mx",
"ahernandez102@ucol.mx",
"arodriguez131@ucol.mx",
"lmarcial0@ucol.mx",
"elopez40@ucol.mx",
"btapia@ucol.mx",
"ltorres19@ucol.mx",
"strujillo1@ucol.mx",
"jrodriguez121@ucol.mx",
"mruiz22@ucol.mx",
"jsanchez75@ucol.mx",
"gmontelon@ucol.mx",
"jocampo3@ucol.mx",
"allerenas4@ucol.mx",
"avizcaino0@ucol.mx",
"avelazquez0@ucol.mx",
]

console.log("Array gameplay: ", arrayPeers.length, "Array gameplay: ",arrayGameplay.length)

var repetidos = [];
var positions = [];

for(let i = 0; i < arrayPeers.length; i++)
    for(let j = 0; j < arrayGameplay.length; j++){
        if(arrayPeers[i]==arrayGameplay[j]){
            repetidos.push(arrayPeers[i]);
            positions.push(i+1)
        }
    }


    for(let i = 0; i < repetidos.length; i++)[
        console.log("Correo:", repetidos[i], "Posicion:", positions[i]) 
    ]
