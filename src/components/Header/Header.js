import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import headerImage from '../../images/header-illustration.svg';

const Header = () => {
    return (
        <div>
            <div>
                <p>Welcome to zinc web agency</p>
                <h1>Zinc creates stylish and efficient sites</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ipsum libero iusto illo, deserunt non quisquam qui possimus error accusamus?</p>
                <div>
                    <button>Offered services</button>
                    <FaPaperPlane /> <span>Get quote</span>
                </div>   
            </div>
            <div>
                <img src={headerImage} alt="" />
            </div>
        </div>
    );
};

export default Header;