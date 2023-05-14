import { useContext } from 'react';
import { FaGoogle , FaGithub } from 'react-icons/fa'
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation() ;

    const from = location.state?.from?.pathname || '/' ;

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result => {
            console.log(result)
            navigate(from)
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (
        <div>
            <div className="divider">LOGIN WITH</div>
            <div className='flex gap-10 justify-center'>
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-sm gap-2">
                    <FaGoogle className='text-green-700 text-2xl'></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline btn-sm gap-2">
                    <FaGithub className='text-gray-600 text-2xl'></FaGithub>
                    Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;