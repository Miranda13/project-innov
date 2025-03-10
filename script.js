document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  alert('Nous travaillons sur la construction de cette application, merci de participer.');

  document.getElementById('email').value = '';
});
