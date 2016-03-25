import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostserviceService extends BaseService {

    getAllPosts(): async.IAjaxThenable<Array<models.IBlogPost>>{
        return this.http.json<Array<models.IBlogPost>>({
            method: 'GET',
            url: this.host + '/posts'
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
    
    getPost(postID: string): async.IAjaxThenable<models.IBlogPost> {
        return this.http.json<models.IBlogPost>({
            method: 'GET',
            url: this.host + '/posts/' + postID
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
    
    submitPost(blogPost: models.IBlogPost): async.IAjaxThenable<string> {
        return this.http.json({
            method: 'POST',
            url: this.host + '/posts',
            data: blogPost
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
}

register.injectable('postservice-svc', PostserviceService);
