function sendMail(contactForm) {
    emailjs.send("service_l1aerqr","top_spots_template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            document.getElementById("form").reset(); // Reset form
            $('.success-modal').modal('show'); // Show success modal
        }, function(error) {
            $('.error-modal').modal('show'); // Show error modal
        })
        return false;
};

// Vertically align modal
// Credit: code taken from https://www.tutorialrepublic.com/faq/how-to-align-bootstrap-modal-vertically-center.php
$(document).ready(function(){
    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        
        // Apply top margin on modal to align it vertically center
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});



// function formReset() {
//     document.getElementById("form").reset();
//   }
  
//   $(document).ready(function () {
//     $("form").submit(function () {
//         $('.success-modal').modal('show');
//     });
//   });
