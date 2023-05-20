import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {API} from "../../../api.js";

const CreatePage = () => {

    const [titleText, setTitle] = useState()
    const [body, setBody] = useState()
    const [userId, setUserId] = useState()

    const navigate = useNavigate()

    const title = (e) => {
        setTitle(e.target.value)
    }

    const bodyCreate = (e) => {
        setBody(e.target.value)
    }

    const user = (e) => {
        setUserId(e.target.value)
    }

    const onSubmit = () => {
        API.post(`posts`, {
            title: `${titleText}`,
            body: `${body}`,
            userId: `${userId}`
        })
            .then(alert(`Вы создали пост - ${titleText} | ${body} | ${userId}`))
            .then(navigate('/posts'))
    }

    return (
        <div>
            <h1>Для создания поста, укажите заголовок, описание и user_id</h1>
            <form action="create">
                <input type="text" onChange={(e) => title(e)}/>
                <input type="text" onChange={(e) => bodyCreate(e)}/>
                <input type="text" onChange={(e) => user(e)}/>
                <button onClick={onSubmit}>
                    Создать
                </button>
            </form>
        </div>
    )
};

export default CreatePage;