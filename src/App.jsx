import { BrowserRouter, Route, Routes } from "react-router-dom"
import BusinessDetails from "./pages/BusinessDetails";

const App = () => {
return(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<BusinessDetails/>}></Route>
    </Routes>
  </BrowserRouter>
)
}

export default App;