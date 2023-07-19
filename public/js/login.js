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
  console.log("Hello");
  const username = document.querySelector('#user-name').value.trim();
  const email = document.querySelector('#user-email').value.trim();
  const password = document.querySelector('#user-password').value.trim();
  const birthday = document.querySelector('#user-birthday').value.trim();
  const location = document.querySelector('#user-location').value.trim();
  console.log(username, email, password, birthday, location);

  if (username && email && password && birthday && location) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, birthday, location }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("RESPONSE", response);
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
}

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

document.querySelector('#signUp-form').addEventListener('submit', signUpFormHandler);
  
