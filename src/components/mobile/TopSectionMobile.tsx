import logo from '../../assets/images/MN.png'
import './TopSectionMobile.css';

const TopSectionMobile: React.FC = () => {

    return (
        <section className="container-top">
            <div className="div-img">
                <img className="top-img" src={logo} />
            </div>
        </section>
    );
};

export default TopSectionMobile;
