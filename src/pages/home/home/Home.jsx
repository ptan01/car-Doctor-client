import About from "../about/About";
import Banner from "../banner/Banner";
import Servises from "../servises/Servises";
import Team from "../team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Servises></Servises>
            <Team></Team>
        </div>
    );
};

export default Home;