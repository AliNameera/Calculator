import 'package:flutter/material.dart';

class Calculator extends StatelessWidget{
  const Calculator({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
  return Scaffold(
    backgroundColor: Colors.black,
    body: SafeArea(
    child: Container(
      height: size.height,
      width: size.width,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.end,
        children:[
        const SizedBox(
         height: 150,
        ),    
        Text(
        "98.74",
        style: TextStyle(
        color: Colors.white,
        fontSize: 50),
       ),
        const SizedBox(
         height: 100,
        ),
          
     Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,

      children: [
       
       Container(
        child: Center(
          child: Text(
            "ac",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
      Container(
                child: Center(
          child: Text(
            "ce",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "%",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "/",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.indigo,
        ),
        height: 40,
        width: 40,
    
       )
      ],
    ),
          const SizedBox(
         height: 20,
        ),
     Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,

      children: [
       
       Container(
                child: Center(
          child: Text(
            "7",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
      Container(
                child: Center(
          child: Text(
            "8",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "9",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "*",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.indigo,
        ),
        height: 40,
        width: 40,
    
       )
      ],
    ),
           const SizedBox(
         height: 20,
        ),
     Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,

      children: [
       
       Container(
                child: Center(
          child: Text(
            "4",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
      Container(
                child: Center(
          child: Text(
            "5",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "6",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "-",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.indigo,
        ),
        height: 40,
        width: 40,
    
       )
      ],
    ),
           const SizedBox(
         height: 20,
        ),
     Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,

      children: [
       
       Container(
                child: Center(
          child: Text(
            "1",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
      Container(
                child: Center(
          child: Text(
            "2",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "3",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "+",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.indigo,
        ),
        height: 40,
        width: 40,
    
       )
      ],
    ),
           const SizedBox(
         height: 20,
        ),
     Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,

      children: [
       
       Container(
                child: Center(
          child: Text(
            "00",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
      Container(
                child: Center(
          child: Text(
            "0",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            ".",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.grey,
        ),
        height: 40,
        width: 40,
    
       ),
        Container(
                  child: Center(
          child: Text(
            "=",
            style: TextStyle(
              fontSize: 20,
              fontWeight:FontWeight. bold,
            ),
          ),
        ),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: Colors.indigo,
        ),
        height: 40,
        width: 40,
    
       )
      ],
    ),
       ]
       ),
    ),
 


    ),
   
    

    );
  }
}