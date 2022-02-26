// let random = Math.floor(Math.random()*10);
// console.log(random);
// let num = Math.floor(Math.random()*6+1);
// console.log(num);
// let sum = random+num;
// console.log(sum);
//-----------------------------------------------------------
// let num=6;
// result = 0;
// for (i=1;i<num;i++)
// {
//   random = Math.floor(Math.random()*10); 
//   result+=random;
// }
// console.log(result);
//------------------------------------------

// let random1 = Math.floor(Math.random()*899+100); 
// console.log(random1)
// let random2 = Math.floor(Math.random()*899+100); 
// console.log(random2)
// let random3 = Math.floor(Math.random()*899+100);
// console.log(random3) 
// if(random1>random2&&random1>random3)
// {
//     console.log(random1+" is greater value")
// }
// else if(random2>random3)
// {
//     console.log(random2+" is greater value")
// }
// else if(random3!=random2&&random3!=random1)
// {
//     console.log(random3+" is greater value")
// }
// else
// {
// console.log("numbers are equal")
// }
//-------------------------------------------------------------
// let month = 4;
// let date = 20;
// if((month >=3 && date>=20) && (month <=6 && date<=31))
// {
// console.log("True")
// }
// else{
//     console.log("false")
// }
//-------------------------------------------------------
// let year = 2000;
// if((year%4==0) && (year%100!=0)&&(year%400==0))
// {
// console.log(year+" is leapyear")
// }
// else{
//     console.log(year+" is not leapyear")
// }
//--------------------------------------------------------
// let coin = Math.floor(Math.random()*2);
// if(coin==1)
// {
//     console.log("Heads")
// }
// else{
//     console.log("tails")
// }
//-------------------------------------------------------

// let num =3;
// if(num==1)
// {
//     console.log("one");
// }
// else if(num==2)
// {
//     console.log("two");
// }
// else if(num==3)
// {
//     console.log("three");
// }
// else{
//     console.log("invalid number")
// }
///----------------------------------------------
// let num =4;
// if(num==1)
// {
//     console.log("sunday");
// }
// else if(num==2)
// {
//     console.log("monday");
// }
// else if(num==3)
// {
//     console.log("tues");
// }
// else if(num==4)
// {
//     console.log("wed");
// }
// else if(num==5)
// {
//     console.log("thur");
// }
// else if(num==6)
// {
//     console.log("friday");
// }
// else if(num==7)
// {
//     console.log("sat");
// }
// else{
//     console.log("invalid number")
// }
////--------------------------------------------
// let a=2;
// let b=3;
// let c=4;
// let result1=a + b * c;
// console.log(result1)
// let result2=a % b + c;
// console.log(result2)
// let result3=c + a / b;
// console.log(result3)
// let result4=a * b + c;
// console.log(result4)
// if(result1>result2&&result1>result3&&result1>result4)
// {
//     console.log(result1+"is maximum value")
// }
// else if(result2>result3&&result2>result4)
// {
//     console.log(result2+"is maximum value")
// }
// else if(result3>result4)
// {
//     console.log(result3+"is maximum value")
// }
// else if(result4!=result1 && result4!=result2 &&result4!=result3)
// {
//     console.log(result4+"is maximum value")
// }
// else{
//     console.log("numbers are equal")
// }
// if(result1<result2&&result1<result3&&result1<result4)
// {
//     console.log(result1+" is minimum value")
// }
// else if(result2<result3&&result2<result4)
// {
//     console.log(result2+" is minimum value")
// }
// else if(result3<result4)
// {
//     console.log(result3+" is minimum value")
// }
// else if(result4!=result1 && result4!=result2 &&result4!=result3)
// {
//     console.log(result4+"is minimum value")
// }
// else{
//     console.log("numbers are equal")
// }
//--------------------------------------------------------------
// let num = Math.floor(Math.random()*10)
// switch(num)
// {
//         case 0:
//         console.log("Zero")
//         break;
//         case 1:
//         console.log("one")
//         break;
//         case 2:
//         console.log("two")
//         break;
//         case 3:
//         console.log("three")
//         break;
//         case 4:
//         console.log("four")
//         break;
//         case 5:
//         console.log("five")
//         break;
//         case 6:
//         console.log("six")
//         break;
//         case 7:
//         console.log("seven")
//         break;
//         case 8:
//         console.log("eight")
//         break;
//         case 9:
//         console.log("nine")
//         break;
//         default:
//         console.log("invalid")
//         break;
// }
//-------------------------------
// let num = Math.floor(Math.random()*7+1)
// switch(num)
// {
//         case 1:
//         console.log("sunday")
//         break;
//         case 2:
//         console.log("monday")
//         break;
//         case 3:
//         console.log("tue")
//         break;
//         case 4:
//         console.log("wed")
//         break;
//         case 5:
//         console.log("thurs")
//         break;
//         case 6:
//         console.log("friday")
//         break;
//         case 7:
//         console.log("saturday")
//         break;  
            // default:
            //     console.log("invalid")
            //     break;      
// }
//-----------------------------------------------
// let num=2;
// poweroftwo =0;
// for(i=1;i<=num;i++)
// {
//     poweroftwo=Math.pow(2,i)
// }
// console.log("power of given number "+poweroftwo);
//------------------------------------------------
//while loop-----------
// let headcount =0;
// let tailcount =0;
// // let i=1;
// while(true)
// {
//     let random = Math.random();
//     if(random>0.5)
//     {
//         headcount++; 
//             if(headcount==10)
//             break;       
//     }
//     else{
//         tailcount++; 
//         if(tailcount==10)
//         break;     
//     }
    
// }
// console.log(headcount);
// console.log(tailcount);
// if(headcount>tailcount)
// {
//     console.log(headcount+" head wins")
// }
// else{
//     console.log(tailcount+" tail wins")
// }
//----------------------------------------------------
//functions------------------------
