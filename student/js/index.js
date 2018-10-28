$(document).ready(function () {

    $(".Banner").click(function () {
        $(".WelcomeScreen").show();
        $(".Manufacturers").hide();
        $(".Cars").hide();
        $(".AddManufacturer").hide();
        $(".AddCar").hide();
    });

    $("#menuTable td:contains('Manufacturers')").click(function () {
        $(".WelcomeScreen").hide();
        $(".Cars").hide();
        $(".AddManufacturer").hide();
        $(".AddCar").hide();
        $(".Manufacturers").show();
    });


    $("#menuTable td:contains('Cars')").click(function () {
        $(".WelcomeScreen").hide();
        $(".Manufacturers").hide();
        $(".AddManufacturer").hide();
        $(".AddCar").hide();
        $(".Cars").show();
    });

    $("#menuTable td:contains('Add manufacturer')").click(function () {
        $(".WelcomeScreen").hide();
        $(".Manufacturers").hide();
        $(".Cars").hide();
        $(".AddCar").hide();
        $(".AddManufacturer").show();
    });

    $("#menuTable td:contains('Add car')").click(function () {
        $(".WelcomeScreen").hide();
        $(".Manufacturers").hide();
        $(".Cars").hide();
        $(".AddManufacturer").hide();
        $(".AddCar").show();
    });

});