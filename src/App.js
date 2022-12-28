import './App.css';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import HomePage from './Pages/HomePage'
import ContactPage from "./Pages/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WhatWeDoPage from "./Pages/WhatWeDoPage"
import WhoWeArePage from "./Pages/WhoWeArePage"
import Appointment from "./Pages/Appointment"


function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Navbar />
                <Routes>
                    <Route path='/' exact element={<HomePage />}/>
                    <Route path='/whoweare' element={<WhoWeArePage />}/>
                    <Route path='/whatwedo' element={<WhatWeDoPage />}/>
                    <Route path='/appointment' element={<Appointment />}/>
                    <Route path='/contactpage' element={<ContactPage />} />
                </Routes>
           <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
