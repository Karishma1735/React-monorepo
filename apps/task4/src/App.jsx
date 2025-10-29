import { useState } from "react";

export default function App() {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");

  const addCities = () => {
    const newCity = { id: Date.now(), text: city };
    setCities([...cities, newCity]);
    setCity("");
  };

  const handleDelete = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

   <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Add city"
      />
      <button onClick={addCities}>Add</button>

      <div>
        {cities.map((city) => (
          <ul key={city.id}>
            {city.text}
            <button onClick={() => handleDelete(city.id)}>x</button>
          </ul>
        ))}
      </div>
    </div>
  );
}
