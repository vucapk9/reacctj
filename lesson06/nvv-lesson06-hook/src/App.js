import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NvvTaskAddOrEdit from './components/NvvTaskAddOrEdit';

function App() {
  // Mock data
  const nvv_listTasks = [
    {nvv_taskId:2210900081, nvv_taskName:"Học lập trình fontend", nvv_level:"Small"},
    {nvv_taskId:1, nvv_taskName:"Học lập trình fontend", nvv_level:"Small"},
    {nvv_taskId:2, nvv_taskName:"Học lập trình reactjs", nvv_level:"Medium"},
    {nvv_taskId:3, nvv_taskName:"Học lập trình Fontend- Reactjs", nvv_level:"Hight"},
    {nvv_taskId:4, nvv_taskName:"Học lập trình Fulltack(PHP, Java, NetCore)", nvv_level:"Small"},
  ];
  //sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [nvvlistTasks, setNvvListTasks] = useState(tvc_listTasks);
  const nvvHandleSubmit = (nvvParam)=>{
    setNvvListTasks(prev =>{
    console.log("App:",nvvParam);
    return[
      ...prev,
    ]
    })
  }
  return (
    <div className="container border">
      <h1>Nguyễn Văn Vũ - K22CNTT2</h1>
      <hr/>
    <div>
    {/*Danh sách list task */ }
    <NvvListTask renderNvvListTasks = {nvvlistTasks}/>
    </div>
    <div>
      <NvvTaskAddOrEdit/>
    </div>
    </div>
  );
}


export default App;
