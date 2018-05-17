import {ApiService} from './base.service'
import { url } from '@/config/url.config'

export default {
    getNavigation(cb)  {
        ApiService.get(url.navigation).then((data)=>{cb(data.data)})
    }
}

