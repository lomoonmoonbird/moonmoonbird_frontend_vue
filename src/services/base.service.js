import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {API_URL} from '@/config/url.config'

export const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = API_URL
    },

    get (resource, slug = '') {
        return Vue.axios
          .get(`${resource}`)
        //   .then((data) => {
        //       console.log('data', data.data)
        //       return data.data
        //   })
          .catch((error) => {
            throw new Error(`[RWV] ApiService ${error}`)
          })
      },
    
    post (resource, data = {}){
      console.log(data, "datadatadata")
      return Vue.axios.post(`${resource}`,data, {headers:{"Content-Type":"application/json"}})
      .catch((error)=>{throw new Error(`[RWV] ApiService ${error}`)})
    },

    getDetail(resource, id='',ticket=0, source=""){
      return Vue.axios
          .get(`${resource}/${id}`+'?ticket='+ticket+"&source="+source)
          .catch((error) => {
            throw new Error(`[RWV] ApiService ${error}`)
          })
    },
    getAllByParameter(resource, hash_url){
      return Vue.axios
          .get(`${resource}`+'?hash_url='+hash_url)
          .catch((error) => {
            throw new Error(`[RWV] ApiService ${error}`)
          })
    },

    getList(resource, category_id, time) {
      return Vue.axios
          .get(`${resource}/${category_id}/${time}`)
          .catch((error) => {
            throw new Error(`[RWV] ApiService ${error}`)
          })
    }
    
    
}

