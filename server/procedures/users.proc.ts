import { rows } from '../config/db';

export function all(): Promise<Array<models.IUser>> {
    return rows('GetUsers');
}