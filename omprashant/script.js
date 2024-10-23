function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name.length < 3) {
        alert('Name must be at least 3 characters long');
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email');
        return false;
    }

    if (phone.length !== 10) {
        alert('Phone number must be 10 digits');
        return false;
    }

    alert('Form Submitted Successfully!');
    return true;
}
