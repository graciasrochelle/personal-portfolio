import { Sidemenu } from './components/common';
import { Pagecontent, About, Education, Experience, Skills, Interests, Projects, Certificates } from './components/pagecontent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Sidemenu />
        <Routes>
          <Route path='/' exact element={<Pagecontent />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/skills' element={<Skills />}/>
          <Route path='/interests' element={<Interests />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
