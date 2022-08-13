//1)
//  let L=+prompt("L uzunlik");
// let M=(L-L%10)/10;
// console.log(M);
// 2)
//  let M=+prompt("M kg");
// let t=(M-M%1000)/1000;
// console.log(t);
//3) 
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// console.log((a-a%b)/b);
// 4)
//  let num=+prompt("ikki xonali son");
// let birlik=num%10;
// let onlik=(num-birlik)/10;
// console.log(onlik,birlik);
// 5) 
// let num=+prompt("ikki xonali son");
// let birlik=num%10;
// let onlik=(num-birlik)/10;
// console.log(onlik+birlik);
// 6) 
// let num=+prompt("ikki xonali son");
// let birlik=num%10;
// let onlik=(num-birlik)/10;
// console.log(onlik*birlik);
// 7) 
// let number=+prompt("999 dan katta  son");
// let num=number%1000;
// console.log(num);
// 8) 
// let N=+prompt("N sekundlar");
// let soat=(N-N%3600)/3600;
// let min=((N-soat*3600)-(N-soat*3600)%60)/60;
// sek=N-soat*3600-min*60;
// console.log(soat,':',min,':',sek);

// Mantiqiy amallar
// 1) 
// let a=+prompt("A soni");
// if(a>0) console.log(true);
// else console.log(false);
// 2)  
// let a=+prompt("A soni");
// if(a%2==1)
// console.log(true);
// else
// console.log(false);
// 3) 
// let a=+prompt("A soni");
// if(a%2==0)
// console.log(true);
// else
// console.log(false);
// 4) 
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// if(a>0 && b>0)
// console.log(true);
// else
// console.log(false);
// 5) 
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// let c=+prompt("C soni");
// if(a>b && b>c)
// console.log(true);
// else
// console.log(false);
// 6) 
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// let c=+prompt("C soni");
// if((a>b && b>c) || (c>b && b>a))
// console.log(true);
// else
// console.log(false);
// 7) 
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// if(a%2==1 && b%2==1)
// console.log(true);
// else
// console.log(false);
// 8) 
// let a=+prompt("A soni");
// let b=+prompt("B soni");
//  let c=+prompt("C soni");
// let d=+prompt("D soni");
// if(a>0 && b>0 && c>0 && d>0)
// console.log(true);
// else
// console.log(false);
// 9)
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// let c=+prompt("C soni");
// if((a>0 && b>0)|| (c>0 && b>0) || (a>0 && c>0))
// console.log(true);
// else
// console.log(false);
// 10)
// let week=+prompt("hafta kuni");
// if(week==1) console.log("Yakshanba");
// else if(week==2) console.log("Dushanba");
// else if(week==2) console.log("Seshanba");
// else if(week==3) console.log("Chorshnba");
// else if(week==4) console.log("Payshanba");
// else if(week==5) console.log("Juma");
// else if(week==6) console.log("Shanba");
// 11)
// let num=+prompt("tel:");
// let cod=(num-num%10000000)/10000000;
// if(cod==99) console.log("Uzmobile");
// else if(cod==33) console.log("Humans");
// else if(cod==93) console.log("Usel");
// else if(cod==90 || cod==91) console.log("Beeline");
// else console.log("Error");
// 12)
// let a=+prompt(" Number ");
// if(a>0) a++;
// else a--;
// console.log(a);

// 13)
// let a=+prompt(" Number ");
// if(a>0) console.log(a+3);
// else console.log(a-2);
// 14)
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// if(a>b) console.log(a);
// else console.log(b);
// 15)
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// let c=+prompt("C soni");
// if(a>b && a>c) console.log(a);
// else if(b>a && b>c) console.log(b);
// else if(c>a && c>a) console.log(c);
// else console.log("Error");
// 16)
// let a=+prompt("A soni");
// let b=+prompt("B soni");
// let c=+prompt("C soni");
// if(a<b && a<c) console.log(a);
// else if(b<a && b<c) console.log(b);
// else if(c<b && c<a) console.log(c);
// else console.log("Error");