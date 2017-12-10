/**
 * Created by Harrison on 06/12/2017.
 */

import { CRUDRepository } from './CRUDRepository';

class ProductRepository extends CRUDRepository {

    constructor() {
        super('products');
    }
}

export { ProductRepository }