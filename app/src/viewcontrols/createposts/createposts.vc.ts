import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostrepoRepository from '../../repositories/postrepo/postrepo.repo';
import HomeViewControl from '../home/home.vc';

export default class CreatepostsViewControl extends BaseViewControl {
    templateString: string = require('./createposts.vc.html');

    context = {
        title: '',
        author: '',
        content: ''
    };
    
    constructor(private postRepo: PostrepoRepository) {
        super();
    }
    
    submit(): void {
        let blogPost: models.IBlogPost = {
            title: this.context.title,
            author: this.context.author,
            content: this.context.content
        };
        this.postRepo.submitPost(blogPost).then((success) => {
            console.log(success);
            this.navigator.navigate(HomeViewControl);
        }, (err) => {
            console.log(err);
        });
    }
}

register.viewControl('createposts-vc', CreatepostsViewControl, [PostrepoRepository]);
