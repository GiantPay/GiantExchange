export default {
  _callbacks: new Map(),
  _emit(event, ...args) {
    const callbacks = this._callbacks.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback.apply(this, args));
    }
  },
  signIn(username, password) {
    if (username === "admin" && password === "admin") {
      this._emit("signIn", username, password);
      localStorage.setItem("auth", "1");
      return true;
    }
    throw new Error("Incorrect username or password");
  },
  signOut() {
    this._emit("signOut");
    localStorage.removeItem("auth");
  },
  getUsername() {
    return "admin";
  },
  getPublicKey() {
    return "GJNsa2AqtZzH5EVu1CA8J7QtFJ6PHSmeuy";
  },
  signMessage(message) {
    return message;
  },
  on(event, cb) {
    let callbacks = this._callbacks.get(event);
    if (!callbacks) {
      this._callbacks.set(event, (callbacks = []));
    }
    callbacks.push(cb);
  }
};
