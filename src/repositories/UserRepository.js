/**
 * Created by Harrison on 07/12/2017.
 */

import { CRUDRepository } from './CRUDRepository';

class UserRepository extends CRUDRepository{

    constructor() {
        super('users');
    }
}

export { UserRepository }