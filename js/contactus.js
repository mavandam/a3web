function contactRequest(form) {
    //var inName = form.name.value;
    var subject = "Web Form Submission"
    //alert("Your Name Is: "+ inName);
    var inEmail = form.email.value;
    //alert("Your Email Is: "+ inEmail);
    var inComm = form.comments.value;
    var body = inName + "'s Comments:\n" + inComm;			
    //alert("Your Name Is: "+ inComm);
    location = "mailto:info@navscapegeo.com?subject="+subject+"&cc="+inEmail+"&body="+body;
    return true;
}