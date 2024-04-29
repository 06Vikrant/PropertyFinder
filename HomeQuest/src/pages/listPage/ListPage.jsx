import React from 'react'
import { Card, Filter, Map } from '../../components';
import { listData } from '../../lib/dummydata'

import './style.scss'

const ListPage = () => {

  const data = listData;

  return (
    <div className='listPage'>
       <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map(item => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
       </div>
       <div className="mapContainer">
        <Map items={data}/>
       </div>
    </div>
  )
}

export default ListPage