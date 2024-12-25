import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">To-Do App</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <button onClick={handleLogout} className="hover:underline">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
