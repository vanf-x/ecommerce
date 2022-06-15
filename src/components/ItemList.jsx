import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div>
      <ul className="flex justify-around flex-wrap">
            {products.map(p => <Item key={p.id} {...p} /> )}
      </ul>
    </div>
  )
}

export default ItemList
