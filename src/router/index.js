import Vue from 'vue'
import Router from 'vue-router'

import DistanceCalc from "@/pages/DistanceCalc";

Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    component: DistanceCalc
  }]
})