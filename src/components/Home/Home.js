import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import SignUp from '../SignUp/SignUp';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <SignUp></SignUp>
            <OurServices></OurServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;