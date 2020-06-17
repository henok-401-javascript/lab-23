import React from 'react';
export default function Result(props){
return (
  <div className={props.className} style={props.style}>
    <div className='header'>
      <pre>{JSON.stringify(props.header, null, props.tabwidth)}</pre>
</div>
    <div className='body'>
      <pre>{JSON.stringify(props.body, null, props.tabwidth)}</pre>
  </div>
</div>
);
}