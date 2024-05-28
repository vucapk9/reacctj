import React from "react"
export default function NvvListTask({rederNvvListTasks}) {
    console.log(renderNvvListTasks);

    // render data
    let nvvElementTask = renderNvvListTasks.map((task, index)=> {
               return (
                <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{task.nvv_taskId}</td>
                    <td>{task.nvv_taskName}</td>
                    <td>{task.nvv_level}</td>
                    <td>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-đange> Remove'></button>
                    </td>
                    
                </tr>
                </>
               )
    })

    return (
        <div>
            <table className='table table-border'>
                <thead>
                    <tr>
                <th>STT</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Level</th>
                <th>Action</th>
                </tr>
                </thead>
            </table>
        </div>
    )
}