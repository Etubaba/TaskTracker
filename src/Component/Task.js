import Tasks2 from "./Tasks2"

const Tasks = ({tasks,onDelete,onToggle}) => {
  

    return (
        <>
    {tasks.map((data)=>(
        <Tasks2 key={data.id} data={data} onDelete={onDelete} onToggle={onToggle}/>
    ))}
        </>
    )
}

export default Tasks