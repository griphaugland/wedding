const checkAuth = () => {
    console.log(localStorage.getItem('auth'));
    if (localStorage.getItem('auth') === 'sandc') {
      return;
    }
    window.location.href = './login.html';
  };
  
  checkAuth();