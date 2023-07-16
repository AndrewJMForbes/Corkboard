const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in !!!');
    }
  }
};
const signUpFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#user-name').value.trim();
  const userEmail = document.querySelector('#user-email').value.trim();
  const userPassword = document.querySelector('#user-password').value.trim();
  const userBirthday = document.querySelector('#user-birthday').value.trim();
  const userLocation = document.querySelector('#user-location').value.trim();
  console.log('You\'re Signed Up!')
  
  if (userName && userEmail && userPassword) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, userEmail, userPassword, userBirthday, userLocation }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signUp-form')
  .addEventListener('signUp-btn', signUpFormHandler);
  
