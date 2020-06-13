// chap12/13

// task 1


//  var char = prompt("please enter 1 of theese :  alphabet or number : ");
//  var acode = charCodeAt(0);

//  if( acode >= 65 &&  acode <= 90){
//      alert("Uppercase letter entered ");
//  }else if( acode >= 97 &&  acode <= 122){
//     alert("Lowerercase letter entered letter");
//  } else if( acode >= 48 &&  acode <= 57){
//     alert("Your Number Has Sucsessfully Been Entered Dear Guest ");
//  }


// task 2


// var inpint = prompt("Enter a desired integer:");
// var inpint2 = prompt("Enter another one:");
// if(inpint > inpint2){
//     alert( inpint + " is larger number");
// }else if(inpint == inpint2){
//     alert( inpint + " is equal to " + inpint2);
// }else{
//     alert(inpint2 + " is larger number");
// }


// task 3


// var usinteger = prompt("Enter a desired integer : ");
// usinteger = parseInt(input_userint);
// if(usinteger > 1){
//     alert("What you entered is a positive number");
// }else if(usinteger < 1){
//     alert("what you entered is a negative number");
// }else if(usinteger == 0){
//     alert("Zero entered");
// }




// task 4


// var inst = prompt("Enter one to check for vowel character : ");
// inst = inst.toUpperCase();
// if( inst.length > 1){
//     alert("Enter single character");
// }else if(inst == "A" || inst == "E" || inst == "I" || inst == "O" || inst == "U"){
//     alert("Vowel Entered");
// }else{
//     alert("your Entered Letter is not a vovel");
// }

// task 5

 
// var userp = prompt("Enter password to save it : ");
// alert("Your new password is saved);
// var input_new = prompt("Enter your password to login : ");
// if(userp == input_new){
//     alert("Correct!! Your 2sd password that was enterd matches the original password.");
// }else{
//     alert("wrong password entered.");
// }

// task 6



// var greet;
// var t = 13;
// if (t < 18) {
// greet = "Good day!";
// }else{
// greet = "Good evening!";
// }

// task 7

// var inputt = prompt("Enter time with (24 hour format)");
// inputt = parseInt(inputt);
// if(inputt >= 0000 && inputt < 1200 ){
//     alert("Good Morning! wish you a nice day ");
// }else if(inputt >= 1200 && inputt < 1700 ){
//     alert("Good After noon!!!");
// }else if(inputt >= 1700 && inputt < 2100 ){
//     alert("Good Evening!!!");
// }else if( inputt >= 2100 && inputt <= 2359){
//     alert("Good Night! sleep tight");
// }

// chap 14-16

// task 1

// var array = [];

// task 2

// var array2 = new Array()

// task 3

// var array3 = ["Hello", "hello1", "hello2"]

// task 4

// var array4 = ["1, 0, 2"]

// task 5 ___________incomplete ____________________________________________________

// var bolo = [true, false]

// task 6___________________________________________

// var mixaray = ["b", 1, true, "lk", "kla"];

// task 7________________________________________


// var varificationsofpakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h1>Cirtificates: </h1>");
// document.write("1) " + varificationsofpakistan[0] + "<br>" + "2) " + varificationsofpakistan[1] + "3) " + varificationsofpakistan[2] + "<br>" + "4) " + varificationsofpakistan[3] + "5) " + varificationsofpakistan[4] + "<br>" + "6) " + varificationsofpakistan[5] + "7) " + varificationsofpakistan[6] + "<br>" + "8) " + varificationsofpakistan[7]);


// task 8_____________________________________________________________________________


// var Family = ["Akif", "Aliyan", "Huma"];
// var  Family_score = [490, 490, 450];
// var Family_total = 500;
// document.write("Score of " + Family[0] + "is :" + Family_score[0] + " . Percentage is : " + Family_score[0]/Family_total * 100 + "% <br>" );
// document.write("Score of " + Family[1] + "is :" + Family_score[1] + " . Percentage is : " + Family_score[1]/Family_total * 100 + "% <br>" );
// document.write("Score of " + Family[2] + "is :" + Family_score[2] + " . Percentage is : " + Family_score[2]/Family_total * 100 + "% <br>" );


// task 10


// var scoresofar = [32, 230, 480, 120];
// document.write("Score of Students : ");
//  for(var i = 0 ;i < scoresofar.length; i++){
//   document.write(scoresofar[i]+", ");
// }
// document.write("<br>")
// var sored = scoresofar.sort();
// document.write("Ordered Score of Students : ");
// for(var i = 0 ;i < sored.length; i++){
//     document.write(sored[i]+", ");
//   }
// task 11
// var cname = ["Karachi", "Islamabad","Lahore", "Qutta", "Peshawar"];
// var chosencity = [cname[1], cname[3], cname[4]];
// document.write("Cities list: ");
// document.write("<br>" + cname);
// document.write("<br>Selected Cities list: ");
// document.write("<br>" + chosencity);


// task 12


// var o = ["hey ", "that_is ", "my ", "bat. "];
// var new_o = o.join("");
// document.write("Array : <br>" + o + "<br>");
// document.write("String : <br>" + new_o);

// task 13



// var arr2 = new Array();
// arr2.push("a");
// arr2.push("b");
// arr2.push("c");
// arr2.push("d");
// arr2.push("e");
// document.write("array : <br>" + arr2 + "<br>");


// document.write("Out : <br>" + arr2.shift()+ "<br>");
// document.write("Out : <br>" + arr2.shift()+ "<br>");
// document.write("Out : <br>" + arr2.shift()+ "<br>");
// document.write("Out : <br>" + arr2.shift()+ "<br>");
// document.write("Out : <br>" + arr2.shift()+ "<br>");

// task 14


// var arrr3 = new Array();
// arrr3.push("a");
// arrr3.push("b");
// arrr3.push("c");
// arrr3.push("d");
// arrr3.push("e");
// document.write("array : <br>" + arrr3 + "<br>");


// document.write("Out : <br>" + arrr3.pop()+ "<br>");
// document.write("Out : <br>" + arrr3.pop()+ "<br>");
// document.write("Out : <br>" + arrr3.pop()+ "<br>");
// document.write("Out : <br>" + arrr3.pop()+ "<br>");
// document.write("Out : <br>" + arrr3.pop()+ "<br>");

// task 15


// var devices = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<form><label>devices:</label><select><option>" + devices[0] +"</option><option>" + devices[1] +"</option><option>" + devices[2] +"</option><option>" + devices[3] +"</option><option>" + devices[4] +"</option><option>" + devices[5] +"</option></select></form>");

// chap 17-20 

// task 1


// var multiarr = [[[] , []],[[[] , []]],[[ [] , []]],];

// task 2


// for(hjlk=1; i< 4; i++){
// for(kljhg=0; j< 4; j++){
//     document.write([j]);    
//     }
//     document.write("<br>")
// }

// task 3


// for(kljhf=0; j< 11; j++){
//         document.write([j]);    
        
//         document.write("<br>")
//     }

// task 4


// var inmt = prompt("Enter the number to dispaly multiplication table :");
// var intlun = prompt("Enter the number upto which multiplication table should display:");
// intlun = parseInt(intlun)
// inmt = parseInt(inmt)

// function multiplyinput(desirednum , desiredlen ){
//     for(var i = 1; i <= desiredlen; i++){
//         var result = desirednum + " * " + i + " = " + i*desirednum + "<br>";
//         document.write(result);
//     }
// }
// multiplyinput(inmt, intlun)

// task 5


//  var achha khana = ["apple", "banana", "mango", "orange",
//     "strawberry"];

//     for(j=0; j< achha khana.length; j++){
//                 document.write(achha khana[j] + "<br>");    

//             }
//             document.write( "<br><br>")
//  for(j=0; j< achha khana.length; j++){
//                 document.write("Element at index " + j +" is " + achha khana[j] + "<br>");    
 
//     }   

// task 6


// document.write( "<h1>Counting<h1><br>");
// for(poi=0; poi< 16; poi++){
//     document.write(poi + ",")
// }

// document.write( "<h1>Reverse Counting<h1><br>");
// for(j=10; j>0; j--){
//     document.write(j + ",")
// }

// document.write( "<h1>Even<h1><br>");
// for(j=2; j < 22; j+=2){
//     document.write(j + ",")
// }

// document.write( "<h1>Odd<h1><br>");
// for(j=1; j < 20; j+=2){
//     document.write(j + ",")
// }

// 

// task 7


// var kiji = ["cake", "apple pie", 'cookie', "chips", "patties"];
// var ulk = prompt("Welcome to JS Bakery. What would you want to order ?");
// ulk = ulk.toLowerCase();

// if(A.indexOf(ulk) !== -1){
//     alert(ulk + " is available at index " + kiji.indexOf(ulk) + " in our bakery.");
// } else{
//     alert("We are sorry," + uklk + "not available in our bakery");
// }

// task 8


// var  arl = [24, 53, 78, 91, 12];

// document.write("Array items : " + arl);

// var bigg123 = 0;

// for(var i=0; i < arl.length ;i++){
        
//     if(bigg123 < arl[i]) {
//         bigg123=array[i];
//     }
//     document.write("The bigg123 number is : " + bigg123);
// }


// task 9


// var smallest = 0;
// var smallestarray = [24, 53, 78, 91, 12];
// document.write("Array items : " + smallestarray);
// for(var hjilkyu=0; hjilkyu < smallestarray.length ;hjilkyu++){
//     if( smallestarray[hjilkyu] < smallest) {
//         smallestarray = array[hjilkyu];
//     }
//     document.write("The largest number is : " + largest);
// }

// task 10


//         for(var vrgigbhm = 1; vrgigbhmg <= 20; vrgigbhmg++){
//             var result =  i*5 ;
//             document.write(result + ", ");
            
//         }
