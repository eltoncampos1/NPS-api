import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from '../app';

import createConnection from '../database';

describe('Users', () => {
    beforeAll(async() => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    afterAll(async() => {
        const conn = getConnection();
        await conn.dropDatabase();
        await conn.close();
    });


    it("Should be able to create a new User", async () => {
        const response = await request(app).post('/users').send({
            email: "user1@email.com",
            name: 'username',
        });

        expect(response.status).toBe(201)
    });

    it("Should not to be albe to create a user with exists email", async () => {
         const response = await request(app).post('/users').send({
            email: "user1@email.com",
            name: 'username',
        });
        expect(response.status).toBe(400)
    })
});