import team1 from '../../../assets/images/team/1.jpg';
import team2 from '../../../assets/images/team/2.jpg';
import team3 from '../../../assets/images/team/3.jpg';

import { FaFacebook, FaInstagram , FaLinkedin, FaTwitter} from 'react-icons/fa'



const Team = () => {
    return (
        <div>
            <p className="font-semibold text-center text-red-600">Team</p>
            <h2 className="text-4xl text-center font-bold">Meet Our Team</h2>
            <p className="text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <div style={{display: 'grid'}} className='grid-cols-3 gap-6 my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Car Engine Plug</h2>
                        <p className='font-semibold'>Engine Expert</p>
                        <div className="card-actions">
                            <button className="btn btn-circle btn-outline">
                            <FaFacebook className='text-4xl text-blue-600' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaInstagram className='text-4xl text-red-700' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaLinkedin className='text-4xl text-blue-800' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaTwitter className='text-4xl text-blue-300' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Car Engine Plug</h2>
                        <p className='font-semibold'>Engine Expert</p>
                        <div className="card-actions">
                            <button className="btn btn-circle btn-outline">
                            <FaFacebook className='text-4xl text-blue-600' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaInstagram className='text-4xl text-red-700' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaLinkedin className='text-4xl text-blue-800' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaTwitter className='text-4xl text-blue-300' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">Car Engine Plug</h2>
                        <p className='font-semibold'>Engine Expert</p>
                        <div className="card-actions">
                            <button className="btn btn-circle btn-outline">
                            <FaFacebook className='text-4xl text-blue-600' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaInstagram className='text-4xl text-red-700' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaLinkedin className='text-4xl text-blue-800' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                            <FaTwitter className='text-4xl text-blue-300' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;