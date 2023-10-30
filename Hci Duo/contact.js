function validate(){

    var nama = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  //  var event = document.getElementById("event").value;
    var photo = document.getElementById("photography").checked;
    var cinema = document.getElementById("cinema").checked;
    var photocinema= document.getElementById("photocinema").checked;
    
    var qna = document.getElementById("qna").value;

    if (nama=="" || email== "" || phone == "" || qna==""){
        alert('Please Fullfill the form!')
        return false
    }

    if(nama.length <3){
        alert('Name must be more than 3 characters')
        return false;
    }

    if(email.indexOf("@")==-1 )
{
    alert('Please enter the valid email!')
    return false;
}
    if(isNaN(phone) || phone.lenght > 14){
        alert('Phone must be a number and not more than 14')
        return false;
    }
    
    if(!photo && !cinema && !photocinema){
    alert("Please choose the service!")
    return false;
}



alert("Form Submitted successfully!");
return true;

}