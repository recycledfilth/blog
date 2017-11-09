declare namespace models {
    // Dont' have to create ICreateResponse
    interface ICreateResponse {
        id: number;
    }

    interface ICategory {
        id: number;
        name: string;
    }

    interface IPost {
        id: number;
        categoryid: number;
        userid: number;
        content: string;
        createdAt: Date;
        title: string;

        authorfirstname?: string;
        authorlastname?: string;
        categoryname?: string;
    }

    interface IUser {
        id: number;
        email: string;
        firstname: string;
        lastname: string;
    }
}