import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersList />} />
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

function UsersList() { 
  return (
    <h1>Users List Page</h1>
  );
}

function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>User Page</h1>
      {id && <p>User ID: {id}</p>}
    </div>
  );
}
export default App;