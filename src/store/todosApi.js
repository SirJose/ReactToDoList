import axios from "axios";
const url = 'http://localhost:3001/todos/';

async function request(httpCall){
    const response = await httpCall();
    return response.data;
}

const all       = ()                    => request(() => axios.get(url));
const single    = (codigo)              => request(() => axios.get(url + codigo));
const add       = (todo)                => request(() => axios.post(url, todo));
const update    = ({ codigo, ...todo }) => request(() => axios.put(url + codigo, todo));
const remove    = (codigo)              => request(() => axios.delete(url+codigo));

const todos = {
    all,
    single,
    add,
    update,
    remove
}

export default todos;