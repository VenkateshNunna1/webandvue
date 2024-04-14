import rootMutation from './mutations.js';
import rootActions from './actions.js';
import rootGetter from './getters.js';
export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: rootMutation,
  actions: rootActions,
  getters: rootGetter,
};
