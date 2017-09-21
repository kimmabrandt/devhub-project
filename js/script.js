var exportJSON;
// modal variables
var modal = document.getElementById('modalBox');
var closeBtn = document.getElementsByClassName("close")[0];

// form data variables
var formData = {};
var site;
var formObject = {
    "business":{
      "business_name":"",
      "locations":[
        {
          "city":"",
          "country":"",
          "phones":[
            {
              "number":"",
              "type":"phone"
            }
          ],
          "postal_code":"",
          "state":"",
          "street":""
        }
      ]
    }
  }

$(document).ready(function() {

  // when form is submitted
  $("form").submit(function(event) {

    // serialize form data into array and stringify
    $.each($('form').serializeArray(), function(i, obj) {
      formData[obj.name] = obj.value
    });

    // add values to JSON object
    formObject.business.business_name = formData.business_name;
    formObject.business.locations[0].city = formData.city;
    formObject.business.locations[0].country = formData.country;
    formObject.business.locations[0].phones[0].number = formData.phone;
    formObject.business.locations[0].postal_code = formData.postal_code;
    formObject.business.locations[0].state = formData.state;
    formObject.business.locations[0].street = formData.street;

    site = JSON.stringify(formObject);

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
    console.log(formObject);
  }

}); // end of document.ready
