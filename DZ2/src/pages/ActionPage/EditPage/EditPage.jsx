import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {API} from "../../../api.js";

const EditPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [text, setText] = useState();

    const onSubmit = () => {
        API.patch(`posts/${id}`, {
            title: `${text}`
        })
            .then(alert(`Вы успешно изменили заголовок поста на - ${text}`))
            .then(navigate('/posts'))
    }

    const inputChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <h1>Введите данные для изменения.</h1>
            <form action="editForm">
                <input type="text" onChange={(event) => inputChange(event)}/>
                <button onClick={onSubmit}>
                    Отправить
                </button>
            </form>
        </div>
    )
}

export default EditPage;