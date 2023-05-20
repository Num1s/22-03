import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {API} from '../../api';


export default function PostsPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        API.get('posts')
        .then( resp => setPosts(resp.data))
    }, [])

    return (
        <>
            <button>
                <Link to={`/posts/create`}>Создать</Link>
            </button>
            <ul>
                {posts.map( p =>
                    <li key={p.id}>
                        <button>
                            <Link to={`/posts/delete/${p.id}`}>Удалить</Link>
                        </button>
                        <button>
                            <Link to={`/posts/edit/${p.id}`}>Редактировать</Link>
                        </button>
                        <Link to={`/posts/${p.id}`}>{p.title}</Link>
                    </li>

                )}
            </ul>
        </>
    )
};