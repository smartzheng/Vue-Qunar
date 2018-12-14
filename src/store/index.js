import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store(
  {
    state: {
      defaultCity: '成都'
    },
    mutations: {
      changeCity (state, city) {
        state.defaultCity = city
      }
    }
  }
)
