import axios from 'axios';

// Đây là 1 class gọi service xài chung cho toàn bộ projects
class AxiosService {
    constructor() {
        const instance = axios.create();

        // Add response interceptors
        instance.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);
        this.instance = instance;
    }

    handleSuccessResponse(response) {
        return response
    }

    handleErrorResponse(error) {
        // error is reason why this Promise rejected.
        return Promise.reject(error);
    }

    // Get Api
    get(url) {
        return this.instance.get(url);
    }

    // Post Api
    post(url, body) {
        return this.instance.post(url, body);
    }

    // Put Api
    put(url, body) {
        return this.instance.put(url, body);
    }
    
    // Delete Api
    delete(url) {
        return this.instance.delete(url);
    }
}

export default new AxiosService();
