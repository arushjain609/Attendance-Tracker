import { LandingPage } from "./pages/LandingPage"
import CoursePage from "./pages/CoursePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <div className="App">
       <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route 
            path="/" 
            element={<LandingPage/>}
            />
            <Route 
            path="/course/:id"
            element={<CoursePage/>}
              />
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
  
}

export default App
