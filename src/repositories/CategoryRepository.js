/**
 * Created by Harrison on 10/12/2017.
 */

import { CRUDRepository } from './CRUDRepository';

export class CategoryRepository extends CRUDRepository {

    constructor() {
        super('categories');
    }
}