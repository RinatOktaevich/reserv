var form = document.forms["form_numbers"];
var btn_Check = form.elements["btn_check"];
btn_Check.onclick = function () {
     btn_check_nummber();
     return false;
}
var p1 = document.getElementsByName("res_p_num")[0];


function btn_check_nummber() {
     var text = form.elements.number_txt;
     console.log("Значение строки: " + text.value);

     //text.value = text.value.trim();
     //console.log("Значение строки после тримиорования: " + text.value);
     ///^-?\d+(\.|,)?\d*/;

     var regex = /https:\/\/www.instagram.com\/.{3,}/;
     text.value = text.value.trim();

     if (regex.test(text.value) == true) {
          text.style.backgroundColor = "rgba(31, 213, 74, 0.71)";
          console.log("Да !");
          //p1.innerText = "Да!";
     } else {
          text.style.backgroundColor = "rgba(212, 22, 22, 0.79)";

          console.log("нет...");
          //p1.innerText = "Нет...";
     }
}









var formcolor = document.forms["form_color"];
var btn_check_clr = formcolor.elements["btn_check_clr"];
//var p2 = formcolor.elements["res_p_clr"];

btn_check_clr.onclick = function () {
     Check_Color();
     return false;
}



function Check_Color() {
     var text = formcolor.elements.number_txt;
     console.log("Значение строки: " + text.value);

     //text.value = text.value.trim();
     console.log("Значение строки после тримиорования: " + text.value);

     var regex = /^#(\d|[a-fA-F]){6}$/;
     text.value = text.value.trim();

     if (regex.test(text.value) == true) {
          text.style.backgroundColor = "rgba(31, 213, 74, 0.71)";
          console.log("Да !");
          //p2.innerText = "Да!";
     } else {
          text.style.backgroundColor = "rgba(212, 22, 22, 0.79)";
          console.log("нет...");
          //p2.innerText = "Нет...";
     }
}
