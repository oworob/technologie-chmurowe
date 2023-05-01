import { useState } from 'react';

function LoadData(SetData) {
  fetch('http://localhost:3001/getdata')
    .then((res) => res.text())
    .then((body) => {
        SetData(body)
    }); 
}

function AddData() {
  fetch('http://localhost:3001/adddata')
    .then((res) => res.text())
    .then((body) => {
        console.log(body)
    }); 
}

function App() {
  const [Data, SetData] = useState("");
  return (
    <div className="App">
      <p>
        {Data}
      </p>
      <button id='adddata' onClick={() => AddData()}>Add new data to database</button>
      <button id='getdata' onClick={() => LoadData(SetData)}>Load data from server</button>
    </div>
  );
}

export default App;
