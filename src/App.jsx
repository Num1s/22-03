import './App.css'
import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {changeUser} from "./store/userReducer.js";
import {increaseCounter, decreaseCounter, startCount} from "./store/counterReducer";


function App() {

    const [inName, setName] = useState();
    const [inAge, setAge] = useState();
    const [inGender, setGender] = useState();

    const count = useSelector(state => state.counter.count)
    const name = useSelector(state => state.user.user.name)
    const age = useSelector(state => state.user.user.age)
    const gender = useSelector(state => state.user.user.gender)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(increaseCounter())
    }

    const decrease = () => {
        dispatch(decreaseCounter())
    }

    const startCounter = (e) => {
        dispatch(startCount(e.target.value))
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeAge = (e) => {
        setAge(e.target.value)
    }

    const changeGender = (e) => {
        if (e.target.value === 'male') {
            setGender('Мужской')
        } else {
            setGender('Женский')
        }
    }

    const sendInformation = () => {
        dispatch(changeUser({
            user: {
                name: inName,
                age: inAge,
                gender: inGender
            }
        }))
    }

    return (
        <>
            <input type="text" onChange={changeName}/>
            <input type="number" onChange={changeAge}/>
            <select name="select_gender" onChange={changeGender}>
                <option value="male">Мужской</option>
                <option value="women">Женский</option>
            </select>
            <h4>My name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>Gender: {gender}</h4>

            <button onClick={sendInformation}>Submit</button>

            <h4>Counter: {count}</h4>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>

            <input type="number" placeholder='Можно указать начальную цифру' onChange={startCounter}/>
        </>
    )
}

export default App
