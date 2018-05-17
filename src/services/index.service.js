import {ApiService} from './base.service'
import { url } from '@/config/url.config'

export default {
    getIndex(cb)  {
        ApiService.get(url.index).then((data)=>{cb(data.data)})
    },

    index() {
        return ApiService.get(url.index)
    }
}

