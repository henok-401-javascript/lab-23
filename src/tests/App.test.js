import React from 'react';
import App from '../App.js';
import renderer from 'react-test-renderer';


describe('snapShot test' , () => {
  it('It can Successfully check by using snapshot' , () =>{
   let htmlSnap = renderer.create(<App/>).toJSON();

   expect(htmlSnap).toMatchSnapshot();
  })
})