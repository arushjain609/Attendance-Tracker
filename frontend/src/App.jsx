import { LandingPage } from "./pages/LandingPage"
import CoursePage from "./pages/CoursePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <div className="App">
      <CoursePage/>
      {/* <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
            path="/" 
            element={<LandingPage/>}
            />
          </Routes>
        </div>
      </BrowserRouter> */}
    </div>
  );
  
}

export default App
