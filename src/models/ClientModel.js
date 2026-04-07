class ClientModel {
    constructor() {
        this.clients = [];
    }
    getAll() {
        return this.clients;
    }
    create(name, email) {

        const client = {
            id: this.clients.length + 1,
            name,
            email
        }
        this.clients.push(client);
        return client;
    }
}

module.exports = new ClientModel();