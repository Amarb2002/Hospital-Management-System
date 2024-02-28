document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(this);
    const formDataJSON = Object.fromEntries(formData.entries());

    // Here you can add code to submit the form data to a backend for processing
    console.log(formDataJSON);

    // Optionally, you can display a confirmation message to the user
    alert('Your appointment request has been submitted. We will contact you shortly.');

    // Optionally, you can reset the form fields after submission
    this.reset();
});