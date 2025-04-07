import './NotFound.css';


const NotFound: React.FC = () => {


    return (
     
            <div className="error-section">
                <svg viewBox="0 0 700 225">
                    <clipPath id="textClip" className="filled-heading">
                        <text id="firstLine" y="70">Page</text>
                        <text id="secondLine" y="140">not</text>
                        <text id="thirdLine" y="210">Found</text>
                    </clipPath>
                    <g id="background" clipPath="url(#textClip)">
                        <use href="#firstLine"></use>
                        <use href="#secondLine"></use>
                        <use href="#thirdLine"></use>
                    </g>
                </svg>
            </div>
  
    );
};



export default NotFound;
