import Button from './Button'

const Header = (props) => {

    
       
    return (
        <div>
            <header   className="header">
                <h1>{props.title}</h1>
               <Button style={props.color} text="Add" onClick={props.onAdd} />
            </header>
            
        </div>
    )
}

/*Header.defaultProps ={
    title: "Task Tracker",
}
Header.propTypes ={
    title:   propTypes.sting 
}*/
export default Header



