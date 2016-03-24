import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../../viewcontrols/home/home.vc'
import PostrepoRepository from '../../repositories/postrepo/postrepo.repo';

export default class CreatepostsViewControl extends BaseViewControl {
    templateString: string = require('./createposts.vc.html');

    context: any = {
        author: '',
        title: '',
        content: ''
    };
    
    publish(): void {
        this.PostrepoRepository.publish(this.context.author, this.context.title, this.context.content)
        .then((success) => {
            this.navigator.navigate(HomeViewControl);
        }).catch((error) => {
            this.context.error = error;
        });
        // this.navigator.navigate('home-vc', {
        //     parameters: {
        //         author: this.context.author,
        //         title: this.context.title,
        //         content: this.context.content
        //     }
        // })
    }
}

register.viewControl('createposts-vc', CreatepostsViewControl, [PostrepoRepository]);
