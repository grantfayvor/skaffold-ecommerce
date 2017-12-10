/**
 * Created by Harrison on 07/12/2017.
 */

import { CRUDRepository } from './CRUDRepository';

export class UserRepository extends CRUDRepository{

    constructor() {
        super('users');
    }
}