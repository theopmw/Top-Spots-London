function sendMail(contactForm) {
    emailjs.send("service_l1aerqr","top_spots_template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            formReset();
        }, function(error) {
            $('.error-modal').modal('show');
        })
        return false;
}

function formReset() {
    document.getElementById("form").reset();
  }
  
  $(document).ready(function () {
    $("form").submit(function () {
        $('.success-modal').modal('show');
    });
  });
