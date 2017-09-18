import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

var store = new Vuex.Store({
    state : {
        navList : [{bannerList:[]}]
    },
    mutations : {
        initNavList(state,navList){
            state.navList = navList;
        }
    },
    actions : {
        getNavList(){
            var d = new Date();
            var t = Math.floor(d.getTime()/60) + "";
            t = t.substr(0,8)
            Vue.prototype.$http.get(`/cxx66/assets/js/index_data.js?v=${t}`)
            .then(res=>{
                console.log(res.data.navList)
                var navList = res.data.navList;
                store.commit("initNavList",navList)
            })
        }
    }
})

export default store;