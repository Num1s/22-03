import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
    const [username, setUsername] = useState('')

    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();
        navigate('/profile', {state: username})
    }

    return (
        <form action="" onSubmit={submitForm}>
            <label htmlFor="">Username: <input type="text" onChange={(e) => setUsername(e.target.value)} /></label>
            <button type="submit">Log In</button>
        </form>
    )
}