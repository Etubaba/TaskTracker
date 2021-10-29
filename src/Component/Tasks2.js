
const Tasks2 = ({data,onDelete,onToggle}) => {
    return (
        <div className ={`task ${data.reminder ?'reminder' : ""}` } 
        onDoubleClick={()=>onToggle(data.id)}>
                <h3>
                
                    {data.text}<i className="far fa-window-close" 
                    style={{ color:"red", cursor:"pointer"}} onClick={()=>onDelete (data.id)}></i>

                </h3>   
       <p>{data.day}</p>

        </div>
    )
}
export default Tasks2 
