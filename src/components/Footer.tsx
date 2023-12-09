import './Footer.css'

const Footer: React.FC = () => {
    return (
      <header>
        <a className="logo" href="/">
          Logo
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Compétences</a>
          </li>
          <li>
            <a href="/">Projets</a>
          </li>
          <li>
            <a href="/">Expériences</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </header>
    );
  };
  
  export default Footer;