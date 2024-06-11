import React, { useEffect, useState } from 'react'

export default function NvvAddEditAndDelete({rendernvvTask, rendernvvIsAddOrEdit,nvvOnSubmit}) {
    
    const [nvvTask, setnvvTask] = useState(rendernvvTask);
    useEffect(()=>{
        setptqTask(rendernvvTask)
    },[renderptqTask])

    // tạo tiêu đề form
    const ptqTieuDe = rendernvvIsAddOrEdit == true?"Thêm mới task":"Sửa thông tin task";
    // Hàm xử lý sự kiện thay đổi trên điều khiển
    const nvvHandleChange = (nvvEvent)=>{
        let name = nvvEvent.target.name;
        let value = nvvEvent.target.value;

        setnvvTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    
    const nvvHandleSubmit = (nvvEvent)=>{
        nvvEvent.preventDefault();
        nvvOnSubmit(nvvTask);
    }
  return (
    <div>
        <h2>{nvvTieuDe}</h2>
        <form >
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input type="text" 
                    name='nvv_taskId' value={nvvTask.nvv_taskId} onChange={nvvHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task ID</span>
                <input type="text" 
                    name='nvv_taskName' value={nvvTask.nvv_taskName} onChange={nvvHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
    
                <select name='nvv_level' value={nvvTask.nvv_level} onChange={nvvHandleChange}  className="form-control" 
                    aria-describedby="basic-addon"> 
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={nvvHandleSubmit} className='btn btn-primary'>Ghi lại</button>
        </form>
    </div>
  )
}