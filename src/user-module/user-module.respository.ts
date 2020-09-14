export class UserRepository {
    constructor(public connection) {
        this.connection = connection
    }

    async getUser(payload: any) {
        return await this.connection('user')
            .select('*')
            .orderBy('id');
    }

    async getUserWithPagination(payload: any) {
        const { page } = payload;

        return await this.connection('user')
            .limit(10)
            .offset((page - 1) * 10)
            .select('*')
            .orderBy('id');
    }

    async postUser(payload) {
        const response = await this.connection('user')
            .returning('*')
            .insert(payload);
        return response;
    }

    async putUser(payload, id) {
        const response = await this.connection('user')
            .where('id', id)
            .update(payload);
        return response;
    }

    async deleteUser(id) {
        const response = await this.connection('user')
            .where('id', id)
            .delete();
        return response;
    }
}