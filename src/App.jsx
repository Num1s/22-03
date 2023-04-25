import './App.css'
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const name = useSelector(state => state.user.name)
  const age = useSelector(state => state.user.age)
  const gender = useSelector(state => state.user.gender)
  const dispatch = useDispatch()



  const changeName = (e) => { 
    dispatch({type: 'CHANGE_NAME', payload: e.target.value})
  }

  const changeAge = (e) => {
      dispatch({type: 'CHANGE_AGE', payload: e.target.value})
  }

  const changeGender = (e) => {
      if (e.target.value === 'male') {
          dispatch({type: 'CHANGE_GENDER', payload: 'Мужской'})
      } else {
          dispatch({type: 'CHANGE_GENDER', payload: 'Женский'})
      }
  }

  return (
    <>
      <input type="text" onChange={changeName}/>
      <input type="number" onChange={changeAge}/>
        <select name="select_gender" onChange={changeGender}>
            <option value="male">Мужской</option>
            <option value="women">Женский</option>
        </select >
      <h4>My name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Gender: {gender}</h4>
    </>
  )
}

export default App
