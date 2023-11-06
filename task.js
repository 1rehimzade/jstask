
var people = [
    { name: "Nihat", surname: "Rwhimzade", age: 19 },
    { name: "Shamama", surname: "Guliyeva", age: 20 },
    { name: "Zulu", surname: "XXX", age: 18 },
    { name: "Asiman", surname: "YYY", age: 17}
];


var table = document.getElementById("myTable");

for (var i = 0; i < people.length; i++) {
    var row = table.insertRow(i + 1);
    var cellName = row.insertCell(0);
    var cellSurname = row.insertCell(1);
    var cellAge = row.insertCell(2);
    cellName.textContent = people[i].name;
    cellSurname.textContent = people[i].surname;
    cellAge.textContent = people[i].age;
}
