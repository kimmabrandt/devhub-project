var exportJSON;

$(document).ready(function() {
  // modal variables
  var modal = document.getElementById('modalBox');
  var closeBtn = document.getElementsByClassName("close")[0];

  // form data variables
  var formData = {};
  var site;
  var formInfo = {"business": {}}

  // when form is submitted
  $("form").submit(function(event) {

    // serialize form data into array and stringify
    $.each($('form').serializeArray(), function(i, obj) {
      formData[obj.name] = obj.value
    });
    formInfo['business'] = formData;
    site = JSON.stringify(formInfo);

    console.log('submitted')

    // change iframe src to site preview and open the modal
    document.getElementById("myFrame").src = "http://cloudtemplates.cloudfrontend.net/app/live-preview/?clone_id=1576931&site=" + site;
    modal.style.display = "block";

    // close modal when close btn is clicked
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // close modal when click outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    event.preventDefault();
  });

  // export data - show JSON object in the console
  exportJSON = function(){
    console.log(formInfo);
  }

}); // end of document.ready
