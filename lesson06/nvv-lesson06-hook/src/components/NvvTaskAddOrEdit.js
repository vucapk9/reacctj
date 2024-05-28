import { useState } from "react"

export default function NvvTaskAddOrEdit({OnSubmit}) {
    // đối tượng task
    const nvvTaskObj = {
        nvv_taskId:0,
        nvv_taskName:"",
        nvv_level:""
    }
    const [nvvTask, setNvvTask] =useState(nvvTaskObj);
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
            <h2>thêm mới task </h2>
            <form>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placehoder="Username" aria-label="Username" aira-describedby="basic-addon1"></input>
                    <label>task ID </label>
                 <input name='nvv_taskId' value={'nvvTask.nvvtaskId'} onChange={nvvHandledChange} />
                </div>
                <div>
                    <label>Task Name </label>
                 <input name='nvv_taskName' value={'nvvTask.nvvtaskName'} onChange={nvvHandledChange} />
                </div>
                <div>
                    <label>task level </label>
                 <slect name='nvv_level' value={nvvTask.nvv_level} onChange={nvvHandledChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'Hight'}>Hight</option>
                 </slect>
                </div>
                <button onClick={nvvHandle}>ghi lại</button>
            </form>
        </div>
    )
}