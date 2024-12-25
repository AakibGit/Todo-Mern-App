import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import axios from 'axios';
import {baseURL} from '../utils/api.js';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      await axios.post(`${baseURL}/api/auth/register`, data);
      navigate('/login');
    } catch (err) {
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-4">Register</h2>
      <AuthForm onSubmit={handleRegister} buttonText="Register" />
      <div>
      <p className="text-center  font-bold my-4">If Register, <Link to={'/login'} className='text-blue-500'>Login Here</Link> </p>
      </div>
    </div>
  );
};

export default RegisterPage;
