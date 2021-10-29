  
/*import PropTypes from 'prop-types'*/


function Button (props) {

    
    
  return (
    <button
    onClick={props.onClick}
      style={{ backgroundColor: 'green' }}
      className='btn'
    >
      {props.text}
    </button>
  )
}
/*
Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  onClick: propTypes.func,
}*/

export default Button
