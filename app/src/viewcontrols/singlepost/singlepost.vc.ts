import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostrepoRepository from '../../repositories/postrepo/postrepo.repo';

export default class SinglepostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context = {
        post: <models.IBlogPost>{}
    };
    
    constructor(private postRepo: PostrepoRepository) {
        super();
    }
    
    navigatedTo(parameters: any): void {
        let idvalue: string = parameters.someid;
        this.postRepo.getpost(idvalue).then((success) => {
           console.log(success); 
           this.context.post = success;
        }, (err) => {
            console.log(err);
        });
    }
}

register.viewControl('singlepost-vc', SinglepostViewControl, [PostrepoRepository]);
