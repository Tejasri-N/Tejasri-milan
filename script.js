document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.checkValidity()) {
        alert('Form submitted successfully!');
    } else {
        this.classList.add('was-validated');
    }
});