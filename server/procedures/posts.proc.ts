import { row, rows, empty } from '../config/db';

export function all(): Promise<Array<models.IPost>> {
    return rows('GetPosts');
}

export function read(id: number): Promise<models.IPost> {
    return row('GetPost', [id]);
}

// showing that parameter name and order does not matter here, but the order of usage in the array DOES matter
// the order of usage in the array MUST correspond with the parameter list in the MySQL stored procedure
// ALSO, don't need to specify Promise<models.ICreateResponse> if you don't want to
export function create(theCategoryId: number, theContent: string, theUserId: number, theTitle: string): Promise<models.ICreateResponse> {
    return row('InsertPost', [theTitle, theContent, theUserId, theCategoryId]);
}

export function update(id: number, title: string, content: string, categoryid: number) {
    return empty('UpdatePost', [id, title, content, categoryid]);
}

export function destroy(id: number) {
    return empty('DeletePost', [id]);
}