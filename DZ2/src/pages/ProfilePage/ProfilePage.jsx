import { useLocation } from "react-router-dom"


export default function ProfilePage() {
    const {state} = useLocation()

    return (
        <div><h3>Profile page</h3>
            Welcome {state}
        </div>
    )
}
