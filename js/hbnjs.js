/*$(document).ready(function () {
    $("#anythingSearch").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("main *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});*/
/*
var mysql = require(['mysql']);

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "1234"
});
let isConnected = false;
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    isConnected = true;
});


let button = document.getElementById("buttonAppointment");
let firstNameInput = document.querySelector("#inputVoornaam");
let lastNameInput = document.querySelector("#inputAchternaam");
let phonenumberInput = document.querySelector("#inputPhoneNumber");
let emailInput = document.querySelector("#inputEmail");
let serviceInput = document.querySelector("#inputService");
let datetimeInput = document.querySelector("#id_1");

button.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("click");
    if (firstNameInput != null && lastNameInput != null && phonenumberInput != null && serviceInput != null && datetimeInput != null){





        if (isConnected){
            console.log("stap 1")
            let klantID;
            if (emailInput != null){
                var klant = "INSERT INTO klant (voornaam, achternaam, contactnummer, email) VALUES (" +firstNameInput.value + ", " + lastNameInput.value + ", "+ phonenumberInput.value + ", " + emailInput.value + ")";
            }
            else{
                var klant = "INSERT INTO klant (voornaam, achternaam, contactnummer) VALUES (" +firstNameInput.value + ", " + lastNameInput.value + ", "+ phonenumberInput.value + ")";
            }

            con.query(klant,function(err,result){
                if (err) throw err;
                console.log("1 record inserted");
                klantID = result.insertId;
            })
            let dateTime = datetimeInput.datepicker("getDate");
            console.log(dateTime);
            let date = dateTime.toLocaleDateString();
            let time = dateTime.toLocaleTimeString();
            var afspraak = "INSERT INTO customers (serviceID, klantID, datum, uur) VALUES ("+ serviceInput.value + ", " + klantID + ", " + date + ", " + time +")";
            con.query(afspraak,function(err,result){
                if (err) throw err;
                console.log("1 record inserted");
            })
        }
        else{
            document.getElementsByName("formWarning").TextContent = "Vul aub de verplicte velden in";
        }
    }
});*/
