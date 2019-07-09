import {ApiService} from './base.service'
import { url } from '@/config/url.config'

export default  {
    getComments(cb, hash_url)  {
        ApiService.getAllByParameter(url.getComments, hash_url).then((data)=>{cb(data.data)})
   },

    comment(cb, comment){
        return ApiService.post(url.comment,  {nickname:comment.nickname, 
            content:comment.content,
            hash_url:comment.hash_url}).then((data)=>{cb(data.data)})
    }
}

