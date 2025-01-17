import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  return (
    <h1>Home Page</h1>
  );
}

function About() { 
  return (
    <h1>About Page</h1>
  );
}

function User() { 
  return (
    <h1>User Page</h1>
  );
}

export default App;