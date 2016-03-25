import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostrepoRepository from '../../repositories/postrepo/postrepo.repo';
import PostserviceService from '../../services/postservice/postservice.svc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};
    
    create(): void{
        this.navigator.navigate('createposts-vc');
    }
    
    details(): void {
        this.navigator.navigate('singlepost-vc:id');
    }
    
}

register.viewControl('home-vc', HomeViewControl, [PostserviceService, PostrepoRepository]);
