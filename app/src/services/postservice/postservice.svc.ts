import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostserviceService extends BaseService {

}

register.injectable('postservice-svc', PostserviceService);
