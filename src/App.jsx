import { useState } from "react"
import Clearin from "./components/clearin"
import Table from "./components/Table"


function App() {

  const [books, setBooks] = useState([
    { id: 1, name: "Book 1", author: "Author 1", year: 2021 },
    { id: 2, name: "Book 2", author: "Author 2", year: 2020 },
    { id: 3, name: "Book 3", author: "Author 3", year: 2019 },
  ])
  const [data_id, setData] = useState()
  // console.log(data_id);
  

  return (
    <div className="">
      <Clearin  setValue={setBooks} element={books} data_id={data_id} setData={setData} />
      <Table dats={books} useArr={setBooks} setData={setData} />

    </div>
  )
}

export default App
