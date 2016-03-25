import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostserviceService extends BaseService {

    publish(title: string, author: string, content: string): async.IThenable<models.IPost> {

    return this.http.json<models.IResponse>({
        method: 'POST',
        url: this.host + 'home/home.html',
        data: <models.IPost>{
            title: title,
            author: author,
            content: content
        }
    }).then(
        (success) => {
            return <models.IPost>{
                id: success.response.data,
            };
        },
        (error): any => {
            throw error.response.message;
        }
    );
}
}

register.injectable('postservice-svc', PostserviceService);
