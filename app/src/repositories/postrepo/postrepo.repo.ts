import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';

export default class PostrepoRepository extends BaseRepository {

}

register.injectable('postrepo-repo', PostrepoRepository);
