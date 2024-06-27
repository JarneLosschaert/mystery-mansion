const KEY = "state";

const stateService = {
  getState: function () {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  },

  addAction: function (id) {
    const state = this.getState();
    state.push(id);
    localStorage.setItem(KEY, JSON.stringify(state));
  },
  
  resetState: function () {
    localStorage.removeItem(KEY);
  },
};

export default stateService;