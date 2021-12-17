


function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_cps4m7b','template_pf76jvd',tempParams)
    .then(function(res){
        console.log("success",res.status);
    })

}


