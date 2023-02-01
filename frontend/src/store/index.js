import { createStore } from 'vuex';

import globalState from './modules/globalState';
import rotate from './modules/rotate';

const store = createStore({
  modules: {
    globalState,
    rotate,
  },
});

export default store;
