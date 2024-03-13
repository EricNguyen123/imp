import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:3002/api/v1/',
    headers: {
        'access-token': 'm7W1YgPd1LidUKqkwBxbNA',
        client: 'QyhQxSpAQsGZkOyJr7EbaA',
        uid: 'admin@bunbusoft.com',
    },
});

export const get = async (path, option = {}) => {
    const reponse = await httpRequest.get(path, option);
    return reponse.data;
};

export const post = async (path, data = {}) => {
    let request;
    if (Object.keys(data).length !== 0) {
        request = await httpRequest.post(path, data);
    }
    return request.data;
};

export const put = async (path, data = {}) => {
    let request;
    if (Object.keys(data).length !== 0) {
        request = await httpRequest.patch(path, data);
    }
    return request.data;
};

export const destroy = async (path, data = {}) => {
    let request;
    if (Object.keys(data).length !== 0) {
        request = await httpRequest.delete(path, data);
    }
    return request;
};

export default httpRequest;
