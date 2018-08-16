import React from 'react'

const Albums = (props) => (
  <div className="Albums">
    {
      props.albums.map((item)=>{
        if (item === null) return null
        return <h1 key={item.id}> {item.name} </h1>
      })
    }
  </div>
);

export default Albums;
