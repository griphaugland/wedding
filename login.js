let submit = document.getElementById('submitbtn');

const login = () => {
  let pInput = document.getElementById('password').value;
  console.log(pInput);
  if (pInput === 'sandc') {
    localStorage.setItem('auth', 'sandc');
    window.location.href = './index.html';
  }
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  login();
});