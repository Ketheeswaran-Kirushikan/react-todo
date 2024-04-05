import React from 'react'
import NavBar from '../../components/Navbar/Navbar';
import Form from '../../components/form/form';
import Calcluation from '../../components/calculation/Calcluation';
import ColorPallate from '../../components/colorPallate/ColorPallate';

const home = () => {
  return (
    <div>
        <NavBar/>
        <Form/>
        <Calcluation/>
        <ColorPallate/>
    </div>
  )
}

export default home;
