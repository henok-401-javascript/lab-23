import React from 'react';

 function Result(props){
return (
  <div className={props.className} style={props.style}>
    
    <div className='header'>

      <p className="headerClass">{JSON.stringify(props.header, null, props.tabwidth)}</p>


    <div className='body'>
      <p className="bodyClass">{JSON.stringify(props.body, null, props.tabwidth)}</p>
  </div>
  </div>
</div>
);
}

export default Result;