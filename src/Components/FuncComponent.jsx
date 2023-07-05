/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const FuncComponent = ({salario , name}) => {
return (
    <>
      <h1>Hola {name} Esto es un Titulo de vuelta</h1>
      <p>{salario}</p>
    </>
  )
}

export default FuncComponent