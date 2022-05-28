var thoiluong = 0;
        function thoigian(x){
            thoiluong = x;
            demnguoc();
        }

        function demnguoc(){
            thoiluong--;
            sophut = Math.floor(thoiluong / 60);
            sogiay = thoiluong % 60;

            if(sophut<10){
                sophut = "0"+sophut;
                document.getElementById("sophut").innerHTML = sophut;
                document.getElementById("sogiay").innerHTML = sogiay;
            }
            if(sogiay<10){
                sogiay = "0"+sogiay;
                document.getElementById("sophut").innerHTML = sophut;
                document.getElementById("sogiay").innerHTML = sogiay;
            }
            

            if(thoiluong > 0){
                setTimeout(demnguoc,1000);
            }else{
                document.getElementById("hetgio").style.display = "block";
            }

        }