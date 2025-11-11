function fn_ValForm(){
    var sMsg = "";
    const valEmail = /^[a-z0-9][a-z0-9._-]*[a-z0-9]@[a-z0-9][a-z0-9._-]*[a-z0-9]\.[a-z0-9]{2,4}$/;

    if(document.getElementById("name").value == ""){
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if(!valEmail.test(document.getElementById("email").value.toLowerCase())){
        sMsg += "\n* Anda belum mengisikan email atau Format email anda salah";
    }
    if(document.getElementById("message").value == ""){
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if(sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        return false;
    }else{
        return true;
    }
}