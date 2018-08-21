export default {
  signIn({ username, password }) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('user-token', 'userToken');
      return true;
    }
    throw new Error('Incorrect username or password');
  },
  signOut() {
    localStorage.removeItem('user-token');
  },
  getPublicKey() {
    if (localStorage.getItem('user-token')) {
      const generatedPublicKey = 'publicKey';
      return generatedPublicKey;
    }
    throw new Error('You are not authorized');
  },
  signMessage(message) {
    if (localStorage.getItem('user-token')) {
      return message;
    }
    throw new Error('You are not authorized');
  },
  on() {
    //
  },
};
