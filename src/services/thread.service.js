import {ApiService} from './base.service'
import { url } from '@/config/url.config'

export default  {
    getDetail(cb, hash_url)  {

        ApiService.getDetail(url.threadDetail, hash_url).then((data)=>{cb(data.data)})
   },

    getPaginationThreads(cb, category_id, time) {
        ApiService.getList(url.threadPaginationThread, category_id, time).then((data)=>{cb(data.data)})
    },

    getPageThread(category_id, time){
        return ApiService.getList(url.threadPaginationThread, category_id, time)
    }
}

