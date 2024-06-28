document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formElements = event.target.elements;
    const firstName = formElements[0].value;
    const lastName = formElements[1].value;
    const email = formElements[2].value;
    const phone = formElements[3].value;
    const password = formElements[4].value;
    const confirmPassword = formElements[5].value;
    
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email ID:', email);
    console.log('Phone Number:', phone);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formElements = event.target.elements;
    const email = formElements[0].value;
    const password = formElements[1].value;
    
    console.log('Email ID:', email);
    console.log('Password:', password);
});
