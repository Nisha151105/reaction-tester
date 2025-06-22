 // use time function in script to count the time
         var start= new Date().getTime();
         function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
         }        

         function appearAfterDelay(){
            setTimeout(move,Math.random() * 2000);
         }

         function move(){
            var top = Math.random() * 400;
            var left = Math.random() * 400;
            var size= (Math.random() * 200) + 100;

            var shape = document.getElementById("shape");
            shape.style.top = top + "px";
            shape.style.left = left + "px";
            shape.style.width= size + "px";
            shape.style.height= size + "px";
            shape.style.backgroundColor= getRandomColor();
            shape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0"; //circle or square
            shape.style.display="block";

            start= new Date().getTime();
         }
           
            document.getElementById("shape").onclick = function(){
            document.getElementById("shape").style.display="none";
            var end= new Date().getTime();
            var timeTaken=(end-start)/1000;
            alert("Your Reaction Time: " + timeTaken  + " seconds");
            move();
        }
         move();