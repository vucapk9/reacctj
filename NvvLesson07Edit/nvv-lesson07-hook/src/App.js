
import './App.css';
import {React,useState} from 'react';
import NvvListTask from './components/NvvListTask';
import NvvTaskAddOrEdit from './components/NvvTaskAddOrEdit';

function App() {}
  // Mock data
  const nvv_listTasks = [
    {nvv_taskId:2210900081, nvv_taskName:"Học lập trình fontend", nvv_level:"Small"},
    {nvv_taskId:1, nvv_taskName:"Học lập trình fontend", nvv_level:"Small"},
    {nvv_taskId:2, nvv_taskName:"Học lập trình reactjs", nvv_level:"Medium"},
    {nvv_taskId:3, nvv_taskName:"Học lập trình Fontend- Reactjs", nvv_level:"Hight"},
    {nvv_taskId:4, nvv_taskName:"Học lập trình Fulltack(PHP, Java, NetCore)", nvv_level:"Small"},
  ];
  //sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [nvvlistTasks, setNvvListTasks] = useState(nvv_listTasks);
  

  //tạo stateduwx liệu cho form (add,edit)
  // đối tượng task
  const nvvTaskObj = {
    nvv_taskId:0,
    nvv_taskName:"",
    nvv_level:""
  };

  //tạo state
  const [nvvTask, setNvvTask] = useState(nvvTaskObj);
  //state đẻ phân biệt trạng thái là thêm mới hay sửa
  const [nvvIsAddOrEdit, setNvvIsAddOrEdit] = useState(true);//mặc định ban đầulà 
  // nhận dữ liệu khi sửa
const nvvHandleEdit = (param)=>{
console.log("App - Edit:",param);
//cập nhật lại nvvTask
setNvvTask(param);
}
  const nvvHandleSubmit = (nvvParam)=>{
    console.log("App:",nvvParam);
    if(nvvIsAddOrEdit===true) {//trường hợp sửa dữ liệu
    setNvvListTasks(prev =>{
    return[
      ...prev,nvvParam];
    });
  }else{   //trượng hợp sử dữ liệu
      for (let i =0;i< nvvListTasks.lenght; i++){
      if(nvvListTasks[i].nvv_taskId ==nvvParam.nvv_taskId){
        nvvListTasks[i] = nvvParam;
        break;
      }
      // cập nhật lại state (nvvListTasks)
      setNvvListTasks((prev)=>{
        return[...prev];
    });
      }
  };

  //hàm xóa 
  const nvvHandleDelete = (param)=>{
    let nvvResult = nvvlistTasks.filter(x=>x.taskId !=param.nvv_taskId);
    setNvvListTasks(nvvResult);
  }

  return (
    <div className="container border">
      <h1>Nguyễn Văn Vũ - K22CNTT2</h1>
      <hr/>
    <div>
    {/*Danh sách list task */ }
    <NvvListTask renderNvvListTasks = {nvvListTasks}
    onNvvTaskEdit = {nvvHandleEdit}
    onNvvTaskDelete = {nvvHandleDelete}
    />

    </div>
    <div>
      <NvvTaskAddOrEdit 
      renderNvvTask = {nvvTask}
      renderNvvIsAddorEdit = {nvvIsAddOrEdit}

      nvvOnSubmit={nvvHandleSubmit} />
    </div>
    </div>
  );
}

export default App;
