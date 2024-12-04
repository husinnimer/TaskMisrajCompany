import MainTable from "./components/MainTable";
import { columns } from "./data/data";
import { data } from "./data/data";

function App() {
  return (
    <>
      <MainTable data={data} columns={columns} />
    </>
  );
}

export default App;
