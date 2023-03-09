function toggleDetails(detailsId, iconClass) {
    $(detailsId).toggle();
    $(iconClass).toggle();
  }
  
  $(document).ready(function() {
    $(".Designicon").click(function() {
      toggleDetails("#designDetails", ".Designicon");
    });
    $("#designDetails").click(function() {
      toggleDetails("#designDetails", ".Designicon");
    });
    $(".Developmenticon").click(function() {
      toggleDetails("#developmentDetails", ".Developmenticon");
    });
    $("#developmentDetails").click(function() {
      toggleDetails("#developmentDetails", ".Developmenticon");
    });
    $(".Managementicon").click(function() {
      toggleDetails("#managementDetails", ".Managementicon");
    });
    $("#managementDetails").click(function() {
      toggleDetails("#managementDetails", ".Managementicon");
    });
  
    for (let i = 1; i <= 8; i++) {
      $(`#work${i}`).hover(function() {
        $(`#workco${i}`).show();
      }, function() {
        $(`#workco${i}`).hide();
      });
    }
  
    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", function(event) {
      event.preventDefault(); // prevents the default form submission behavior
      myFunction();
    });
  
    function myFunction() {
      var username = document.getElementById("name");
      var email = document.getElementById("email");
      var message = document.getElementById("message");
  
      if (!username.value || !email.value || !message.value) {
        return false;
      } else {
        alert("Thank you " + username.value + " for reaching out. Message received.");
        location.reload(); // reload the page
        return true;
      }
    }
  });