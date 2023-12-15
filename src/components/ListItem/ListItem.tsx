import React from 'react'

interface ListItemProps {
  item: string
}

const ListItem: React.FC<ListItemProps> = ({item}) => {
  return (
    <div>{item}</div>
  )
}

export default ListItem