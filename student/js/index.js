$(document).ready(function () {

    function hideAll() {
        $(".WelcomeScreen").hide();
        $(".Manufacturers").hide();
        $(".AddManufacturer").hide();
        $(".AddCar").hide();
        $(".Cars").hide();
    }

    function createCarsTable() {
        hideAll();
        $(".Cars").show();

        $.getJSON("/manufacturerNames", function (data) {
            var dropdown = $("#searchByManufacturerDropDown");
            dropdown.empty();
            var all = $("<option>All manufacturers</option>");
            dropdown.append(all);
            $.each(data, function (key, value) {
                var item = $("<option value=" + "'" + value + "'>" + value + "</option>");
                dropdown.append(item);
            });
        });

        listCars("All manufacturers");
    }

    function listCarsWithCookie(pManufacturer) {
        document.cookie = "name" + pManufacturer;

        $.getJSON('manufacturer', function (data) {
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
        });
        $('#carsPlace').html(table);
    }

    function listCars(pManufacturer) {
        $.getJSON('cars', function (data) {
            var table = $('<table id = "carsTable"></table>');
            table.append('<tr> <th>Name</th> <th>Consumption</th> <th>Color</th> <th>Manufacturer</th> <th>Available</th> <th>Year</th> <th>Horsepower</th> </tr>');

            if(pManufacturer === "All manufacturers") {
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
            }
            else {
                $.each(data, function (key, value) {
                    if(pManufacturer === value.manufacturer) {
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
                    }
                });
            }
            $('#carsPlace').html(table);
        });
    }

    $(function (){
        const form = $('#addCarForm');
        $(form).submit(function (event) {
            event.preventDefault();

            $.ajax({
                type:'post',
                url: 'addCar',
                data: $(form).serialize(),
                success: function () {
                    createCarsTable();

                },
                error: function () {
                    alert("Hiba!");
                }
            })
        })
    });

    $(function (){
        const form = $('#addManufacturerForm');
        $(form).submit(function (event) {
            event.preventDefault();

            $.ajax({
                type:'post',
                url: 'addManufacturers',
                data: $(form).serialize(),
                success: function () {
                    alert("OK");
                    //manufacturers();
                },
                error: function () {
                    alert("Hiba!");
                }
            })
        })
    });


    $(".Banner").click(function () {
        hideAll();
        $(".WelcomeScreen").show();
    });

    $("#menuTable td:contains('Manufacturers')").click(function () {
        hideAll();
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
        createCarsTable();
    });

    $("#searchByManufacturerButton").click(function () {
        var item = $("#searchByManufacturerDropDown :selected").text();
        listCarsWithCookie(item);
    });

    $("#menuTable td:contains('Add manufacturer')").click(function () {
        hideAll();
        $(".AddManufacturer").show();
        //$(".AddManufacturer").load("manufacturerForm.html");
    });

    $("#menuTable td:contains('Add car')").click(function () {
        hideAll();
        $(".AddCar").show();
        //$(".AddCar").load("carForm.html");

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
