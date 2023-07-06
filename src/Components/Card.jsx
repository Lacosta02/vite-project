/* eslint-disable react/prop-types */


const Card = ({producto}) => {
  return (
    <div className="card">
        <ul>
            <li>
                <h2>{producto.nombre}</h2>
                <img src={producto.imagen}/>
                <h3>{producto.precio}</h3>
            </li>
        </ul> 
    </div>
  )
}

export default Card