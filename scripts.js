// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('formButton');
    var myForm = document.getElementById('myForm');
    
    myButton.addEventListener('click', function() {
        myForm.style.display = 'block';
    });
});
