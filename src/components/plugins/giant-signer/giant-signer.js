export default {
  _callbacks: new Map(),
  _emit(event, ...args) {
    const callbacks = this._callbacks.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback.apply(this, args));
    }
  },
  signIn(username, password) {
    this._emit('signIn', username, password);
  },
  signOut() {
    this._emit('signOut');
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
