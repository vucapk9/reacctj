import React from "react"

export default function NvvListTask({rederNvvListTasks}) {
    console.log(renderNvvListTasks);
    //hàm xử lý khi sửa 
    const nvvHandleEdit = (param) =>{
        console.log("Click edit:",param);
        onNvvTaskEdit(param)  //đẩy lên app thông qua props(onNvvTaskEdit)
    }
    //hàm xử lý xóa 
    const nvvHandleDelete =(param)=>{
        if(window.location.confirm('bạn chắc chắn muốn xóa không')){
            onNvvTaskDelete(param) //đẩy dữ liệu xóa lên app.js
        }
        }
    

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
                        <button className='btn btn-success'
                        onClick={()=>nvvHandleEdit(task)}
                        >Edit</button>
                        <button className='btn btn-danger'> 
                        onClick={()=>nvvHandleDelete(task)}
                        Remove'</button>
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