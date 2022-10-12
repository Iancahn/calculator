console.log("Hello World!");

let calculations = 2;
document.getElementById("calculations").innerHTML = `${calculations}`;

function clearField() {
    let calculations = 0;
    document.getElementById("calculations").innerHTML = `${calculations}`;
    console.log("I was clicked");
}