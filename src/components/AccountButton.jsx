import contactIcon from '../assets/contactOrange.png';
import { Link } from 'react-router-dom';

const AccountButton = () => {
    return (
        <Link to="/compte">
            <button className='flex items-center bg-white text-[#ff802b] border border-[#ff802b] p-2 rounded-sm hover:bg-gray-300 transition duration-300'>
                <img src={contactIcon} alt="" className='mr-1' />
                Mon Compte
            </button>
        </Link>
    );
};

export default AccountButton;