import { useState } from "react"

export default function NvvTaskAddOrEdit({renderNvvTask,nvvOnSubmit}) {
    // đối tượng task
    //const nvvTaskObj = {
       // nvv_taskId:0,
       // nvv_taskName:"",
       // nvv_level:""
   // }
    const [nvvTask, setNvvTask] =useState(renderNvvTask);
    useEffect(()=>{
        setNvvTask(renderNvvTask)
    },[renderNvvTask])
    
    //tạo tiêu đề form
    const nvvTieude = renderNvvIsAddOrEdit==true?"Thêm mới task":"Sửa thông tin task";
    //hàm xử lý sự kiện thay đổi trên điều khiển
     const nvvHandledChange = (nvvEvent)=>{
    let name = nvvEvent.target.name;
    let value = nvvEvent.target.value;

    setNvvTask9(prev => {
        return{
            ...prev,
        [name]:value,
    }
    })
  }
   
  const nvvHandleSubmit = (nvvEvent)=>{
    nvvEvent.prevenDefault();
    nvvOnSubmit(nvvTask);
  }
  }
    return(
        <div>
            <h2>{nvvTieDe}</h2>
            <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" 
                name='nvv_taskId' value={'nvvTask.nvvtaskId'} onChange={nvvHandledChange}
                className="form-control" placehoder="Username" aria-label="Username" aira-describedby="basic-addon1"></input>
                </div>
                
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">@</span>
                <input type="text" 
                name='nvv_taskName' value={'nvvTask.nvvtaskName'} onChange={nvvHandledChange}
                className="form-control" placehoder="Username" aria-label="Username" aira-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
                    
                 <slect name='nvv_level' value={nvvTask.nvv_level} onChange={nvvHandledChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'Hight'}>Hight</option>
                 </slect>
                </div>
                <button onClick={nvvHandleSubmit} className='btn btn-primary'>ghi lại</button>
            </form>
        </div>
    )
    