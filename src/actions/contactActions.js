import {
    GET_CONTACTS,
    DELETE_CONTACT,
    ADD_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT
} from './types';
import axios from 'axios';

export const getContacts = () => dispatch => {
    axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            // console.log(res.data);
            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            })
        })
}

export const getContact = (id) => dispatch => {
    axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            dispatch({
                type: GET_CONTACT,
                payload: res.data
            })
        })
}

export const deleteContact = (id) => dispatch => {
    axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_CONTACT,
                payload: id
            })
        })

}

export const addContact = (contact) => dispatch => {
    axios
        .post(`https://jsonplaceholder.typicode.com/users`, contact)
        .then(res => {
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            })
        })
}

export const updateContact = (contact) => dispatch => {
    axios
        .put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
        .then(res => {
            dispatch({
                type: UPDATE_CONTACT,
                payload: res.data
            })
        })

}