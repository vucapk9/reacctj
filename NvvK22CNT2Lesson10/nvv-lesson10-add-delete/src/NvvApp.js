import './App.css';
import NvvListUsers from './components/NvvListUsers';
import axios from'./api/nvvApi.js'
import {useDeferredValue,useEffect, useState } from 'react';
import NvvFormAddOrEdit from './components/NvvFormAddOrEdit.js';

function NvvApp() {
const [nvvListUsers,setNvvListUsers] = useState([]);

// đọc dữ liệu từ api
const nvvGetAllUsers = async ()=>{
  const nvvResponse = await axios.get("https://667ccf4e3c30891b865dbc3c.mockapi.io/nvvApi/V1/nvvUserss");
  console.log("Api Data:",nvvResponse.data);
  setNvvListUsers(nvvResponse.data)

}
useEffect(()=>{
nvvGetAllUsers();
console.log("State Data:",NvvListUsers);
},[])
  
const [nvvAddOrEdit,setNvvAddOrEdit] = useState(false);
const nvvInUser = {
  "UserName": "Nguyễn Văn Vũ",
    "Password": "06/04/2004",
    "Email": "nguyenvanvu642004@gmail.com",
    "Phone": "0891145111",
    "id": "2210900081"
}
const [nvvUser,setNvvUser] = useState(nvvInUser);
//hàm xử lý nút thêm mới
const nvvHandleAddNew = ()=> {
setNvvAddOrEdit(true);
}
const nvvHandleClose=(param)=>{
  setNvvAddOrEdit(param);
}
const nvvHandleSumbmit=(param)=>{
  nvvGetAllUsers();
  setNvvAddOrEdit(param);
}
const nvvHandleDelete=()=>{
  nvvGetAllUsers();
}
let nvvElementForm = nvvAddOrEdit===true?
<NvvFormAddOrEdit renderUsers={nvvUser}
                  onNvvClose={nvvHandleClose}
                  onNvvSumbmitForm={nvvHandleSumbmit}/>:"";
  return (
    <div className="container border my-3">
      <h1>làm việc với MockApi</h1>
      <hr/>
      <NvvListUsers renderNvvListUsers={NvvListUsers} onNvvDelete={nvvHandleDelete}/>
      <button className='btn btn-primary' name='btnNvvThemMoi' onClick={nvvHandleAddNew}>Thêm mới </button>
      <hr/>
      {nvvElementForm}
    </div>
  );
}
export default NvvApp;
