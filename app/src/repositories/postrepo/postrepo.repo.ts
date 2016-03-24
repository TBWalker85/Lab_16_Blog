import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostserviceService from '../../services/postservice/postservice.svc';

export default class PostrepoRepository extends BaseRepository {
    title: string;
    author: string;
    content: string;
    
    constructor(PostserviceService: PostserviceService){
        super();
    }
    
    publish(title: string, author: string, content: string): async.IThenable<boolean> {
        return this.PostserviceService.publish(title, author, content).then((post) => {
            this.title = post.title;
            this.author = post.author;
            this.content = post.content;
            return true;
        });
    }
}

register.injectable('postrepo-repo', PostrepoRepository, [PostserviceService]);
