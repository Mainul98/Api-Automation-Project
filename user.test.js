const { expect } = require('chai');
const axios = require('axios');
const jsonData = require('./.env.json')
// const jsonData = {
//     baseUrl: "https://jsonplaceholder.typicode.com"
// };

describe('JSONPlaceholder API GET Routes', () => {
    it("Should be able Get User List", async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log(response.data); // Logging the response data
        expect(response.status).to.equal(200); // Check the response status
        // expect(response.data.data[0].id).to.equal(7); // Check the first item"s id
    });
});  

    it("should retrieve a specific user by ID", async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log(response.status); // Logging the response status
        expect(response.status).to.equal(200); // Check the response status
        // expect(response.data.name).to.equal("Test Employee");
    });
    describe('JSONPlaceholder API - GET /posts/1/comments', () => {
    it("should retrieve comments for post ID 1", async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`, {

            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log(response.status); // Logging the response status
        expect(response.status).to.equal(200); // Check the response status
        //expect(response.data.name).to.equal("Test Employeeeeeeeee");
    });
});   
describe('JSONPlaceholder API - POST /posts', () => {
    it("should create a new post", async () => {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
            title: "new title",
            
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log(response.status); // Logging the response status
        expect(response.status).to.equal(201); // Check the response status
        expect(response.data.title).to.equal("new title");
    });
});   
describe('JSONPlaceholder API - POST /posts/1', () => {
    it("should update User", async () => {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/1`, {
            body: "Updated post content"
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log(response.status); // Logging the response status
        expect(response.status).to.equal(200); // Check the response status
        expect(response.data.body).to.equal("Updated post content");
    });
});
describe('JSONPlaceholder API - DELETE /posts/1', () => {
    it("should delete User", async () => {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/1`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // console.log(response.status); // Logging the response status
        expect(response.status).to.equal(200);
    });
});

