import React, { useState, useEffect } from 'react';
import uuid from 'uuid';

// Mock data
const nvv_listTasks = [
  {
    nvv_taskId: 2201234,
    nvv_taskName: "Nguyễn Văn Vũ",
    nvv_level: "Small",
  },
  {
    nvv_taskId: 1,
    nvv_taskName: "Học lập trình frontend",
    nvv_level: "Small",
  },
  {
    nvv_taskId: 2,
    nvv_taskName: "Học lập trình reactjs",
    nvv_level: "Medium",
  },
  {
    nvv_taskId: 3,
    nvv_taskName: "Lập trình với Frontend - Reactjs",
    nvv_level: "High",
  },
  {
    nvv_taskId: 4,
    nvv_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
    nvv_level: "Small",
  },
];
// Lấy dữ liệu trong localStorage
let data = JSON.parse(localStorage.getItem("NvvK22CNT2DataTask"));
console.log("data:",data);
if(data === null || data.length ===0){
  data = nvv_listTasks;
  localStorage.setItem("NvvK22CNT2DataTask", JSON.stringify(data));
}
// sử dụng hàm useState để lưu trữ trạng thái dữ liệu
const [nvvListTasks, setNvvListTasks] = useState(data);

// Khi nvvListTasks thay đổi thì cập nhật lại localStorage
useEffect(()=>{
  localStorage.setItem("NvvK22CNT2DataTask", JSON.stringify(nvvListTasks));
},[nvvListTasks]);
export default App;
const ptqHandleDelete = (param)=>{
  let ptqResult = ptqListTasks.filter(x=>x.ptq_taskId != param.ptq_taskId);
  setptqListTasks(ptqResult);
}
return (
  <div className="container border">
    <h1>Nguyễn Văn Vũ - K22CNT2</h1>
    <hr />
    <div>
      {/* Danh sách list task  */}
      <NvvListTask
        rendernvvListTasks={nvvListTasks}
        nvvTaskEdit={nvvHandleEdit}
        nvvTaskDelete = {nvvHandleDelete}
      />
    </div>
    <div>
      <NvvAddEditAndDelete 
          rendernvvTask = {nvvTask}
          rendernvvIsAddOrEdit = {nvvIsAddOrEdit}
          nvvOnSubmit={nvvHandleSubmit} />
    </div>
  </div>
);