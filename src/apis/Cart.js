import Api from "./Api";

const END_POINT = 'carts';

export default {
    all() {
        return Api.get(END_POINT);
    },
    store(data) { 
        return Api.post(END_POINT, data);
    },
    delete(id) {
        return Api.delete(`${END_POINT}/${id}`);
    }
}