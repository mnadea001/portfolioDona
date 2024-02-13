import logo from '../../assets/images/MN.png'
import './TopSectionMobile.css';
import { JackInTheBox } from "react-awesome-reveal";


const TopSectionMobile: React.FC = () => {

    return (
        <section className="container-top">
            <div className="div-img">
                <JackInTheBox>
                <img className="top-img" src={logo} />
                </JackInTheBox>
            </div>
        </section>
    );
};

export default TopSectionMobile;
