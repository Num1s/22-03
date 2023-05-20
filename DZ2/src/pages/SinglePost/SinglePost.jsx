import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {API} from '../../api'


export default function SinglePost() {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const goBack = useNavigate()


    useEffect(() => {
        API.get(`posts/${id}`)
        .then( resp => setPost(resp.data))
    }, [id])


    
    return (
        <div>
            <button onClick={() => goBack(-1)}>Go back</button>
            <h3>{post.title} ID {id} </h3>
            <p>{post.body}</p>
        </div>
    )
};