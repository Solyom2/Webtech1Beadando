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

        $.getJSON('manufacturers', function (data) {
            var table = $('<table id = "manufacturersTable"></table>');
            table.append('<tr> <th>Name</th> <th>Country</th> <th>Founded</th> </tr>');
            $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var name = $('<td>' + value.name + '</td>');
                row.append(name);
                var country = $('<td>' + value.country + '</td>');
                row.append(country);
                var founded = $('<td>' + value.founded + '</td>');
                row.append(founded);
                table.append(row);
            });
            $('#manufacturersPlace').html(table);
        });
    });


    $("#menuTable td:contains('Cars')").click(function () {
        $(".WelcomeScreen").hide();
        $(".Manufacturers").hide();
        $(".AddManufacturer").hide();
        $(".AddCar").hide();
        $(".Cars").show();

        $.getJSON('cars', function (data) {
            var table = $('<table id = "carsTable"></table>');
            table.append('<tr> <th>Name</th> <th>Consumption</th> <th>Color</th> <th>Manufacturer</th> <th>Available</th> <th>Year</th> <th>Horsepower</th> </tr>');
            $.each(data, function (key, value) {
                var row = $('<tr></tr>');
                var name = $('<td>' + value.name + '</td>');
                row.append(name);
                var consumption = $('<td>' + value.consumption + '</td>');
                row.append(consumption);
                var color = $('<td>' + value.color + '</td>');
                row.append(color);
                var manufacturer = $('<td>' + value.manufacturer + '</td>');
                row.append(manufacturer);
                var available = $('<td>' + value.available + '</td>');
                row.append(available);
                var year = $('<td>' + value.year + '</td>');
                row.append(year);
                var horsepower = $('<td>' + value.horsepower + '</td>');
                row.append(horsepower);
                table.append(row);
            });
            $('#carsPlace').html(table);
        });
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

        $.getJSON("/manufacturerNames", function (data) {
            var dropdown = $("#manufacturerDropDown");
            dropdown.empty();
            $.each(data, function (key, value) {
                var item = $("<option value=" + "'" + value + "'>" + value + "</option>");
                dropdown.append(item);
            });
        });
    });

});