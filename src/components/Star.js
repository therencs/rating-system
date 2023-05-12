import { FaStar } from 'react-icons/fa';

function Star(props) {

  let color = props.enabled ? "yellow" : "grey";


  console.log(props.id);
  return (

      <FaStar 
        onClick={e => props.handleClick(props.id)} 
        color={color}
        fontSize="6em"
        letterSpacing="8em"
      />

    
  )
}

export default Star