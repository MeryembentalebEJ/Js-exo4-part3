
function validateForm(){
    var yourName = document.getElementById('yourName').value;
    var confirm = document.getElementById('confirmation').value;
 if (yourName == confirm && yourName + confirm != '') {
    document.getElementById('yourName').style.border = document.getElementById('confirmation').style.border = '3px solid green';
 }
 else{
    document.getElementById('yourName').style.border = document.getElementById('confirmation').style.border = '3px solid red';
 }
}

