//alert ("eyyyyyybroo")
//var city:string = "FuWa";
//console.log(city);
//bsp
//console.log ("Die Gesamtemission ist:" + totalEmission);
//Emis aktuell
var emissionafrica18 = 1235.5;
var emissionsa18 = 1261.5;
var emissioneu18 = 4209.3;
var emissionna18 = 6035.6;
var emissionasia18 = 16274.1;
var emissionaus18 = 2100.5;
var total18 = emissionafrica18 + emissionsa18 + emissioneu18 + emissionna18 + emissionasia18 + emissionaus18;
//Emis 2008
var emissionafrica08 = 1028;
var emissionsa08 = 1132.6;
var emissioneu08 = 4965.7;
var emissionna08 = 6600.4;
var emissionasia08 = 12954.7;
var emissionaus08 = 1993;
var total08 = emissionafrica08 + emissionsa08 + emissioneu08 + emissionna08 + emissionasia08 + emissionaus08;
//differenz in t
var difafrica = emissionafrica18 - emissionafrica08;
var difsa = emissionsa18 - emissionsa08;
var difeu = emissioneu18 - emissioneu08;
var difna = emissionna18 - emissionna08;
var difasia = emissionasia18 - emissionasia08;
var difaus = emissionaus18 - emissionaus08;
//differenz in %
var percentafrica18 = emissionafrica18 * 100 / total18;
var percentafrica08 = emissionafrica08 * 100 / total08;
var percentsa18 = emissionsa18 * 100 / total18;
var percentsa08 = emissionsa08 * 100 / total08;
var percenteu18 = emissioneu18 * 100 / total18;
var percenteu08 = emissioneu08 * 100 / total08;
var percentna18 = emissionna18 * 100 / total18;
var percentna08 = emissionna08 * 100 / total08;
var percentasia18 = emissionasia18 * 100 / total18;
var percentasia08 = emissionasia08 * 100 / total08;
var percentaus18 = emissionaus18 * 100 / total18;
var percentaus08 = emissionaus08 * 100 / total08;
var a = "Die Emmission von ";
var b = "ist: ";
var c = " kg CO2.";
var d = "Relativ zur Gesamtemission der Welt verursacht ";
var e = "damit ";
var f = " %.";
var g = "Für ";
var h = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var i = " verändert. ";
var j = "2018 im Vergleich zu 2008 sind das ";
var Africa = "Afrika ";
var SouthAmerica = "Süd Amerika ";
var Europe = "Europa ";
var NorthAmerica = "Nord Amerika ";
var Asia = "Asien ";
var Australia = "Australien ";
console.log(a + Africa + b + emissionafrica18 + c + d + Africa + e + percentafrica18 + f + g + Africa + h + percentafrica08 + i + j + difafrica + c);
console.log(a + SouthAmerica + b + emissionsa18 + c + d + SouthAmerica + e + percentsa18 + f + g + SouthAmerica + h + percentsa08 + i + j + difsa + c);
console.log(a + Europe + b + emissioneu18 + c + d + Europe + e + percenteu18 + f + g + Europe + h + percenteu08 + i + j + difeu + c);
console.log(a + NorthAmerica + b + emissionna18 + c + d + NorthAmerica + e + percentna18 + f + g + NorthAmerica + h + percenteu08 + i + j + difna + c);
console.log(a + Asia + b + emissionasia18 + c + d + Asia + e + percentasia18 + f + g + Asia + h + percentasia08 + i + j + difasia + c);
console.log(a + Australia + b + emissionaus18 + c + d + Australia + e + percentaus18 + f + g + Australia + h + percentaus08 + i + j + difaus + c);
//# sourceMappingURL=script.js.map
//daten von europa auf 4 attribute verechnen (dynamisch mit typescript auf der webseiten console)
//# sourceMappingURL=typescript.js.map