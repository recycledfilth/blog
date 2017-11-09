import { rows } from '../config/db';

export function all(): Promise<Array<models.ICategory>> {
    return rows('GetCategories');
}