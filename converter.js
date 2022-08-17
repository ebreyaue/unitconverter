//Node Js 

const prompt = require('prompt-sync')({sigint:true});

let opt;
let a;

function farenheit(a,c)
{

if(c == 0) //C to F
{
return ( a * 9/5 ) + 32;
}

else // F to C
{
return ( a - 32 ) * 9/5;
}
 
}

function mps(a,c)  //kmh mps
{
if(c == 0)
{
return ( 1000/3600 ) / a; 

}

else //mps kmh
{
return ( 1000/3600 ) * a;
}
}

function km(a,c) //km miles
{
if( c == 0 )
{
return ( 1000/1609 )/a;
}
else //miles km
{
return ( 1000/1609 ) * a;
}
}


function kelvin(a,c)
{
if( c == 0 ) // C to K
{
return a + 273;
}
else //K to C
{
return a -273;
}
}


function pound(a,c)
{
if( c == 0 ) //kg to pound
{
return a / 2,205;
}

else //pound to kg
{
return a * 2,205;
}
}



function feet(a,c)
{
if( c == 0 ) //m to ft
{
return a / 3,281;
}
else //ft to m
{
return a * 3,281;
}
}



function oz(a,c)
{
if( c == 0 ) //gr to oz
{
return a / 28,35;
}
else //oz to gr
{
return a * 28,35;
}
}

//function press any key
function menu()
{
    console.log('-------------------');
    console.log('Main Menu');
    console.log('-------------------');
    console.log('1) celsius to farenheit');
    console.log('2) farenheit to celsius');
    console.log('3) kilometers per hour to meters per second');
    console.log('4) meters per second to kilometers per hour');
    console.log('5) kilometers to miles');
    console.log('6) miles to kilometers');
    console.log('7) celsius to kelvin');
    console.log('8) kelvin to celsius');
    console.log('9) kilograms to pound');
    console.log('10) pound to kilograms');
    console.log('11) kilometers to feet');
    console.log('12) feet to kilograms');
    
    console.log('13) grams to oz');
    console.log('14) oz to grams');
    console.log('-------------------');
    console.log('0) exit');
}
    

while(opt!=0)
{

menu();
opt = prompt('Select Option:');

switch(opt)
{
case '1':
console.clear();
console.log('%f F', farenheit(prompt('insert value: '),0));
break;

case '2':
console.clear();
console.log('%f C', farenheit(prompt('insert value: '),1));
break;

case '3':
console.clear();
console.log('%f m/s', mps(prompt('insert value: '),0));
break;

case '4':
console.clear();
console.log('%f km/h', mps(prompt('insert value: '),1));
break;

case '5':
console.clear();
console.log('%f miles', km(prompt('insert value: '),0));
break;

case '6':
console.clear();
console.log('%f Km', km(prompt('insert value: '),1));
break;

case '7':
console.clear();
console.log('%f K', kelvin(prompt('insert value: '),0));
break;

case '8':
console.clear();
console.log('%f C', kelvin(prompt('insert value: '),1));
break;

case '9':
console.clear();
console.log('%f Libs', pound(prompt('insert value: '),0));
break;

case '10':
console.clear();
console.log('%f Kg', pound(prompt('insert value: '),1));
break;

case '11':
console.clear();
console.log('%f M', feet(prompt('insert value: '),0));
break;

case '12':
console.clear();
console.log('%f Ft', feet(prompt('insert value: '),1));
break;

case '13':
console.clear();
console.log('%f G', oz(prompt('insert value: '),0));
break;

case '14':
console.clear();
console.log('%f F', oz(prompt('insert value: '),1));
break;

case '0':
console.log('Good Bye :)');
break;       

default:
console.log('incorrect option');   
}
}






