import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostrepoRepository from '../../repositories/postrepo/postrepo.repo';
import CreatepostsViewControl from '../createposts/createposts.vc';
import SinglepostViewControl from '../singlepost/singlepost.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        posts: <Array<models.IBlogPost>>[]
    };
    
    constructor(private postRepo: PostrepoRepository) {
        super();
    }
    
    navigatedTo(): void {
        this.postRepo.getAllPosts().then((success) => {
            this.context.posts = success;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
    
    goToCompose(): void {
        this.navigator.navigate(CreatepostsViewControl);
    }
    
    readMore(postId: string) {
        this.navigator.navigate(SinglepostViewControl, {
            parameters: {
                someid: postId
            }
        });
    }
}

register.viewControl('home-vc', HomeViewControl, [PostrepoRepository]);
