import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 lg:relative'>
                    <img src={person} className='lg:w-3/4 rounded-2xl' alt="" />
                    <img src={parts} className='lg:absolute lg:w-4/6 border border-8 border-white rounded-2xl top-52 left-40' alt="" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-red-600 font-semibold'>About Us</h3>
                    <h1 className="text-5xl font-bold leading-tight">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;