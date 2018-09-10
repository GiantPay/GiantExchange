export default {
  _callbacks: new Map(),
  _emit(event, ...args) {
    const callbacks = this._callbacks.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback.apply(this, args));
    }
  },
  signIn(username, password) {
    if (username === 'admin' && password === 'admin') {
      this._emit('signIn', username, password);
      localStorage.setItem('auth', '1');
      return true;
    }
    return false;
  },
  signOut() {
    this._emit('signOut');
    localStorage.removeItem('auth');
  },
  getUsername() {
    return 'username';
  },
  getPublicKey() {
    return 'generatedPublicKey';
  },
  signMessage(message) {
    return message;
  },
  on(event, cb) {
    let callbacks = this._callbacks.get(event);
    if (!callbacks) {
      this._callbacks.set(event, callbacks = []);
    }
    callbacks.push(cb);
  },
};
