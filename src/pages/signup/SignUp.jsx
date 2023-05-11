import { Link } from 'react-router-dom';
import loginLogo from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    
    
    const handleSignUp = (e)=>{
        e.preventDefault()
        const form = e.target ;
        const name = form.name.value ;
        const email = form.email.value ;
        const pass = form.password.value ;

        console.log(name, email, pass)
        createUser(email, pass)
        .then(result => {
            const user = result.user ;
            console.log(user)
        })
        .catch(err => {
            console.log(err.message)
        })
        
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 mr-5 lg:text-left">
                    <img className='w-full' src={loginLogo} alt="" />
                </div>
                <div className="card w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Sign Up!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign UP" />
                            </div>
                            <div>
                                <p>Already have an account ? please <Link to="/login" className='text-red-600'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;