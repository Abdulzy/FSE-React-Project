import axios from "axios";
const BASE_URL = "https://fse2node.herokuapp.com/api";
// const BASE_URL = "http://localhost:4000/api";
const TUITS_API = `${BASE_URL}/tuits`;
const USERS_API = `${BASE_URL}/users`;

const api = axios.create({
    withCredentials: true
});

export const findAllTuits = () =>
    api.get(TUITS_API)
        .then(response => response.data);

export const findTuitById = (tid) =>
    api.get(`${TUITS_API}/${tid}`)
        .then(response => response.data);

export const findTuitByUser = (uid) =>
    api.get(`${USERS_API}/${uid}/tuits`)
        .then(response => response.data);

export const createTuitByUser = (uid, tuit) =>
    api.post(`${USERS_API}/${uid}/tuits`, tuit)
        .then(response => response.data);

export const updateTuit = (tid, tuit) =>
    api.post(`${TUITS_API}/${tid}`, tuit)
        .then(response => response.data);

export const deleteTuit = (tid) =>
    api.delete(`${TUITS_API}/${tid}`)
        .then(response => response.data);

export const deleteTuitByContent = (content) =>
    api.delete(`${TUITS_API}/byContent/${content}`)
        .then(response => response.data)
