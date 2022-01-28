import { Countries } from "./component/Countries";
import { Search } from "./component/Search";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Search setData={setData} />
      <Countries data={data} setData={setData} />
    </div>
  );
}

export default App;
