import React from 'react'

const VariableList = (data) => {
  return (
    <>
    {console.log(data.data)}
    <div>{data.data.name}</div>
    </>
  )
}

export default VariableList