import { useNavigate , Link} from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import axios from 'axios';
import {baseURL} from '../utils/api'

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/login`, data);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (err) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <div>
      <h2 className="text-center text-2xl font-bold my-4">Login</h2>
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
      <div>
      <p className="text-center  font-bold my-4">If Not Register, <Link to={'/register'} className='text-blue-500'>Register Here</Link> </p>
      </div>
    </div>
    
    </>
    
    
  );
};

export default LoginPage;
