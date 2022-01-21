import { Sidemenu } from './components/common';
import { Pagecontent, About, Education, Experience, Skills, Interests, Projects, Certificates } from './components/pagecontent';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Sidemenu />
        <Routes>
          <Route path='/personal-portfolio' exact element={<Pagecontent />} />
          <Route path='/personal-portfolio/about' element={<About />} />
          <Route path='/personal-portfolio/education' element={<Education />} />
          <Route path='/personal-portfolio/experience' element={<Experience />} />
          <Route path='/personal-portfolio/certificates' element={<Certificates />} />
          <Route path='/personal-portfolio/skills' element={<Skills />}/>
          <Route path='/personal-portfolio/interests' element={<Interests />} />
          <Route path='/personal-portfolio/projects' element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
