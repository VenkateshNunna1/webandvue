export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(state, getter) {
    const finalCounter = getter.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
