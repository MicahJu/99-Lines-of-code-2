document.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementById("button");
   
       button.addEventListener("click", function(){
       
       //Array for friends
       let friends = ["Silas", "Jaylon", "Theo", "Stefon"]; 
   
       /*
           the first for loop will print each friends name in the array 
       */
       for (let i=0; i<friends.length; i++){
           //create elements
           const div = document.createElement("div");
           const heading = document.createElement("h3");
           
   
           //append the div to body
           document.body.appendChild(div);
           div.className = "friend";
           div.innerHTML= "<h3 class='name'>" + friends[i].toUpperCase() + "</h3>";    
           /*
               2nd loop will print the song for each friend
           */
           for (let j=99; j>0; j--){
               //Checks iteration and changes to singular 
               if (j===1){
                   const p = document.createElement("p");
                   p.innerHTML =  j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";   
                   div.appendChild(p); 
               } else { 
                   const p = document.createElement("p");
                   p.innerHTML =  j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file";      
                   div.appendChild(p); 
               } 
           };
       };
       });
   });