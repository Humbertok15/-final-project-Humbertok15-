document.addEventListener('DOMContentLoaded', () => {
    const volunteerButton = document.getElementById('volunteerButton');
    const formContainer = document.getElementById('volunteerFormContainer');

    // Show the form when the "Volunteer Now" button is clicked
    volunteerButton.addEventListener('click', () => {
        formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Handle form submission
    const volunteerForm = document.getElementById('volunteerForm');
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        alert(`Thank you, ${name}! We will contact you at ${email}.`);
        formContainer.style.display = 'none';
        volunteerForm.reset();
    });

    // Interactive element: Show additional details on hover
    const hoverArea = document.getElementById('hoverArea');
    const additionalDetails = document.getElementById('additionalDetails');

    // Show additional details when hovering over the hover area
    hoverArea.addEventListener('mouseover', () => {
        additionalDetails.style.display = 'block';
    });

    // Hide additional details when the mouse leaves the hover area
    hoverArea.addEventListener('mouseout', () => {
        additionalDetails.style.display = 'none';
    });
});


