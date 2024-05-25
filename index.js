        // var a;

        // what is hoisting in JavaScript
        // document.getElementById("demo").innerHTML = a;
        // a = 10;

        // var b = 5;
        // var c = 5;

        // if(b === c){
        //     document.getElementById("demo").innerHTML = "You are right on your way.";
        // }

        // var z = 10; //This is Primitive Value in JavaScript

        // var x = [10, 20, 30]; //This is Refernce Value in JavaScript

        // var y = x;

        // x.pop();

        // var abcd = "Asad Naeem";

        // var dcba = abcd;

        // if (12 > 13) {
        //     console.log(abcd);
        // }
        // else{
        //     console.log(z);
        // }

        // var a = 10;
        // var b = 10;

        // if(a == b){
        //     document.getElementById("id").innerHTML = "Good Evening";
        // }
        // else{
        //     document.getElementById("id").innerHTML = "Good Night";
        // }

        // Using for Loop

        // for(var i = 0; i < 11; i++){
        //     console.log(i);
        // }

        // for(var a = 25; a < 101; a++){
        //     console.log(a);
        // }

        // let asad = [10, 20, 30, 40, 50, 60, 70, 80, 90];

        // for(let h = 0; h < 10; h++){
        //     console.log(asad);
        // }

        // function myname(){
        //     console.log("ASAD NAEEM");
        // }

        // myname();

        // var arr = [1,2,3,4,5,6,7];

        // arr.pop(); end sy aik value cut

        // arr.push(10); //for add an extra number

        // arr.unshift(1); //for add a new member in the first number

        // arr.shift(); //shuru sy aik value ko cut krdeta hay

        // arr.splice(3,1) // yeh function array k beech main say remove kerny k liay use kiya jata hay

        // let txt = "We are Vikings";

        // alert(txt);

        // let d = new Date();

        // alert + "The Year is " + (d.getFullYear());

        // var car = {
        //     name: "Toyota",
        //     model: "Legender",
        //     color: "Black"
        // };

        // var new_car = {
        //     name: "Civic",
        //     color: "Black",
        //     brand: "Local"
        // };

        
    // function abc(){

    //     for(var i = 1; i <12; i++){
    //         console.log(i);
    //     }
    //     console.log(i);
    // }

    // abc();
    
    // function one(){
    //     for(var a = 0; a <10; a++){
    //         console.log(a);
    //     }
    //     console.log(a);
    // }

    // one();
 
    // let a = 10;
    // let b = 20;

    // console.log(a + b);

    let asad = "Asad";
    let lname = "Naeem";

    // console.log(asad + " " + lname);

    document.getElementById("myname").innerHTML = "My Name is " + asad + " " + lname;

    // How to copy a array in JS

    var ac = [1, 2, 3, 4, 5];

    var ba = [...ac];

    ba.pop();

    var myname = {
            name: "Asad Naeem",
            city: "Faislabad"
    };

    var changemyname = {...myname};

    // if(1){
    //     console.log("Hello Asad Naeem");
    // }
    // else{
    //     console.log("HELLO ASAD NAEEM");
    // }

    var z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

    z.forEach(function(val){
        // console.log(values + 10);
        // console.log(val + 5);
    })

    var obj = {
        name: "Asad Naeem",
        age: 21,
        city: "Fsd"
    };

    var var2 = obj;

    var var2 = {
        name: "ASAD BUTT",
    }

    for(var data in obj){
        console.log(data, obj[data]);
    }
    
    name = "Hello";

    const person ={
        firstName : "ASAD",
        lastName : "NAEEM",
        country : "Pakistan"
    }

    var person1 = {
        firstname : "ASAD BUTT",
        age : 21,
        country : "Pakistan"
    }

    var basant = {
        first_date : 29,
        second_date : 1,
        total_kites : 70
    }

    console.log(basant.first_date);

    total_kites1 = 90;

    for(var key in basant){
        console.log([key], basant);
    }

    let txt = "Hello Asad Naeem";

    let x = txt.length;

    // alert(x);

    let age = 19;

    // alert(age);

    let txt1 = "My Name is \"Asad Naeem.\" ";

    alert(txt1);