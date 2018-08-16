import React from 'react'

import './Albums.css';
import Album from './album/Album';

const Albums = (props) => (
  <div className="Albums">
    {
      props.albums.map((item)=>{
        if (item === null) return null
        return <Album
          key={item.id}
          {...item}
        />
      })
    }
  </div>
);

export default Albums;
