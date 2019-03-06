export default {
  set(key, item) {
    const string = JSON.stringify(item);
    localStorage.setItem(key, string);
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
