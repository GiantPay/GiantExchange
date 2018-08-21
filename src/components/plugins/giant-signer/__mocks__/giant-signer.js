// import Vue from 'vue';

// TODO -- add i18n
const i18n = {
  incorrectCredentials: 'Incorrect username or password',
  notAuth: 'You are not authorized',
};

const cookieMock = {
  userToken: '',
};

export default {
  signIn({ username, password }) {
    if (username === 'admin' && password === 'admin') {
      // Vue.cookie.set('user-token', 'userToken', { expires: '1h' });
      cookieMock.userToken = 'userToken';
      return true;
    }
    throw new Error(i18n.incorrectCredentials);
  },
  signOut() {
    // Vue.cookie.delete('user-token');
    cookieMock.userToken = '';
  },
  getPublicKey() {
    if (cookieMock.userToken) {
      return 'generatedPublicKey';
    }
    throw new Error(i18n.notAuth);
  },
  signMessage(message) {
    if (cookieMock.userToken) {
      return message;
    }
    throw new Error(i18n.notAuth);
  },
  on() {
    //
  },
};
