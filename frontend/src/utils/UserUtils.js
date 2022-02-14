export default class UserUtils {
    static API_URL = 'http://localhost:3001/api/users';

    static async getAll() {
        const response = await fetch(this.API_URL);
        const users = await response.json();
        return users;
    }

    static async delete(_id) {
        const response = await fetch(this.API_URL + "/" + _id, { method: 'DELETE' });
        if (response.status === 204) {
            return true;
        } else if (response.status === 400) {
            return false;
        }
    }

    static async update(_id, data) {
        const response = await fetch(this.API_URL + "/" + _id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (response.status === 201) {
            return true;
        } else if (response.status === 400) {
            return false;
        }
    }

    static async addNew(data) {
        const response = await fetch(this.API_URL + '/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (response.status === 201) {
            return true;
        } else if (response.status === 400) {
            return false;
        }
    }
}