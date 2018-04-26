import {ApiService} from './base.service'
import { url } from '@/config/url.config'

export default  {
    getEaseHearts(cb)  {

         ApiService.get(url.audio).then((data)=>{cb(data.data)})
    }
}

