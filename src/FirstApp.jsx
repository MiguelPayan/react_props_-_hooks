import PropTypes from 'prop-types';

// const saludo = (nombre) =>{
//     return `Que rollo ${nombre} como andas`
// }


export const FirstApp = ({title = 'No hay titulo', subtitle = 'No hay sub titulo'}) => {
    if (!title){
        throw new Error('El titulo no existe')
    }

  return (
    <>
    <h1> {title} </h1>
    <p>{subtitle}</p>
    <p>Mi nombre es Miguel</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}


