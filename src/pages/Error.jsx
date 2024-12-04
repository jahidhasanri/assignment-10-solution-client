import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div>
            <Header></Header>
            <div className='text-center lg:mt-44'>
                <div className='lg:ml-[400px] mt-7'>
                    <img className='' src="https://i.ibb.co.com/PQXhmKJ/404-page-not-found-1024x576.webp" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;