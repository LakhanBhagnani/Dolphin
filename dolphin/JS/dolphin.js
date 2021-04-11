$(document).ready(function () {

    $("#headertext1").on("keyup", function () {
        var value = $(this).val();
        $("#headertextloc").text(value);
    });

    $('input[type="file"]').change(function (e) {
        var fileName = e.target.files[0].name;
       // $("#headerimage").val(fileName);
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("headerimageloc").src = e.target.result;
        }
        reader.readAsDataURL(this.files[0]);
    });

    $('#accentcolor').change(function (){
        var accColor= $("#accentcolor").val();
        $(".mscontainer").css("background-color",accColor)
        $("#phoneheader").css("background-color",accColor)
    });

    
    $('#textcolor').change(function (){
        var textColor= $("#textcolor").val();
        $(".smartphone").css("color",textColor);
        

    });
});