document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value; // Capture the phone number
    const message = document.getElementById('message').value;
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxE6RWjAsYCT5CXBfMDiSi21gp22ClnBEhN2u87F14wNYlOSLXpXsl5dzmlgiuZHLOdXw/exec'; // Replace with your Google Apps Script URL
  
    // Create a new FormData object for form submission
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone); // Add phone number to FormData
    formData.append('message', message);
  
    // Send the form data to Google Sheets
    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset(); // Clear the form
      } else {
        alert('Error in sending message. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error in sending message. Please check your internet connection and try again.');
    });
});
