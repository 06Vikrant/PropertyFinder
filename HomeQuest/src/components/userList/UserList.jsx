import React from 'react'
import './style.scss'

import { Card } from '../index'
import { listData } from '../../lib/dummydata'

const UserList = () => {
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default UserList
