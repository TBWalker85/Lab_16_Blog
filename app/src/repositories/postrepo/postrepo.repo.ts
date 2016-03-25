import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostserviceService from '../../services/postservice/postservice.svc';

export default class PostrepoRepository extends BaseRepository {
    
    constructor(private postSVC: PostserviceService) {
        super();
    }

    getAllPosts(): async.IThenable<Array<models.IBlogPost>> {
        return this.postSVC.getAllPosts();
    }
    
    getpost(postID: string): async.IThenable<models.IBlogPost> {
        return this.postSVC.getPost(postID);
    }
    
    submitPost(post: models.IBlogPost): async.IThenable<string> {
        return this.postSVC.submitPost(post);
    }
}

register.injectable('postrepo-repo', PostrepoRepository, [PostserviceService]);
