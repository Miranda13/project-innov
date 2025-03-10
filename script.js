document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const termsCheckbox = document.getElementById('terms');
  const registerForm = document.getElementById('register-form');
  const emailError = document.getElementById('email-error');
  const termsError = document.getElementById('terms-error');

  registerForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = emailInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let valid = true;

      if (!emailRegex.test(email)) {
          emailError.textContent = 'Veuillez entrer un e-mail valide.';
          valid = false;
      } else {
          emailError.textContent = '';
      }

      if (!termsCheckbox.checked) {
          termsError.textContent = 'Vous devez accepter les termes et conditions.';
          valid = false;
      } else {
          termsError.textContent = '';
      }

      if (valid) {
          registerForm.submit();
      }
  });
});
