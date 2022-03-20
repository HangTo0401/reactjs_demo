import axios from 'axios';

// Đây là 1 class gọi service xài chung cho toàn bộ projects
class AxiosService {
    constructor() {
        const instance = axios.create();
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
}

export default new AxiosService();