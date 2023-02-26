function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let address = document.getElementById("address").value
    // let tagname = document.getElementsByTagName("input")
    // let ClassName = document.getElementsByClassName("email")

    if(name == ""){
        return alert(" NAMA TIDAK BOLEH KOSONG!!!")
    } else if(email == ""){
        return alert(" EMAIL TIDAK BOLEH KOSONG!!!")
    } else if(phone == ""){
        return alert(" PHONE TIDAK BOLEH KOSONG!!!")
    } else if(subject == ""){
        return alert(" SUBJECT TIDAK BOLEH KOSONG!!!")
    } else if(address == ""){
        return alert(" ADDRESS TIDAK BOLEH KOSONG!!!")
    }

    const emailReceiver = "aoishinziku@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Permisi, saya ${name}, alamat saya ${address}, tolong hubungi saya di${phone}`
    a.click()

    let data = {
        name,
        email,
        phone,
        subject,
        address
    }

    console.log(data);

    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(subject);
    // console.log(address);
}