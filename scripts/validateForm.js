function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var activity = document.getElementById("activity").value;

    if (fullName.trim() === "") {
        alert("Molimo unesite ime i prezime.");
        return false;
    }

    if (email.trim() === "") {
        alert("Molimo unesite email adresu.");
        return false;
    }

    // You can add more specific validation for email format if needed

    if (phone.trim() === "") {
        alert("Molimo unesite broj telefona.");
        return false;
    }

    if (activity === "") {
        alert("Molimo odaberite aktivnost.");
        return false;
    }

    // Additional validation can be added based on your requirements

    return true; // If all validations pass, the form will be submitted
}