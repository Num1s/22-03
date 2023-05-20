import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {API} from "../../../api.js";

const DeletePage = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const onDelete = () => {
        API.delete(`posts/${id}`)
            .then(alert(`Вы успешно удалили пост - ${id}`))
            .then(navigate('/posts'))
    }

    return (
        <div>
            <h1>Вы точно хотите удалить пост с id: {id} ?</h1>
            <button onClick={onDelete}>
                Да
            </button>
            <button onClick={() => navigate(-1)}>
                Нет
            </button>
        </div>
    )

}

export default DeletePage;