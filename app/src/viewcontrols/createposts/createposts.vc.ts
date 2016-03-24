import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class CreatepostsViewControl extends BaseViewControl {
    templateString: string = require('./createposts.vc.html');

    context: any = {
        author: '',
        title: '',
        content: ''
    };
    
    publish(): void {
        this.navigator.navigate('home-vc', {
            parameters: {
                author: this.context.author,
                title: this.context.title,
                content: this.context.content
            }
        })
    }
}

register.viewControl('createposts-vc', CreatepostsViewControl);
