import React from 'react';
import Hero from '../HeroSection/Hero';
import JoinUs from '../JoinUs/JoinUs';
import Conversation from '../Conversation/Conversation';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <JoinUs></JoinUs>
            <Conversation></Conversation>
        </div>
    );
};

export default Home;