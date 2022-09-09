import './App.css';
import { useState } from "react";

function App() {

  const [weight, setWeight] = useState();
  const [intensity, setIntensity] = useState(0);
  const [sex, setSex] = useState();
  const [calories, setCalories] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (sex==="male") {
      const result = (879 + 10.2*weight)*intensity
      setCalories(result)
    }
    if (sex==="female") {
      const result = (795 + 7.18*weight)*intensity
      setCalories(result)
    }
  }

  return (
    <div>
      <h3>Calorie Calculator</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Weight</label>
          <input type="number" onChange={e => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Intensity</label>
          <select name="intensity" onChange={e => setIntensity(e.target.value)}>
            <option value="1.3">Light</option>
            <option value="1.5">Usual</option>
            <option value="1.7">Moderate</option>
            <option value="2">Hard</option>
            <option value="2.2">Very Hard</option>
          </select>
        </div>
        <div>
          <label>Sex</label>
          <input type="radio" id="maleInput" value="male" name="sex" onChange={e => setSex(e.target.value)}/><label for="maleInput">Male</label>
          <input type="radio" id="femaleInput" value="female" name="sex" onChange={e => setSex(e.target.value)}/><label for="femaleInput">Female</label>
        </div>
        <div>
          <output>{calories.toFixed(0)} Calories</output>
        </div>
        <button onClick={handleSubmit}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
