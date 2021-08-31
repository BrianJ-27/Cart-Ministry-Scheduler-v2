import React from 'react';
import Header from './DashHeader';
import Nav from './DashNavigation';
import Content from './DashContent';

const DashArea = () => {
  return (
    <div className='grid__wrapper'>
     <Header/>
     <Nav/>
     <Content/> 
    </div>
  );
};

export default DashArea;
