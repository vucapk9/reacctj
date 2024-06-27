
import './App.css';
import NvvListUsers from './components/NvvListUsers';
import axios from'./api/nvvApi'
import { useDeferredValue, useEffect, useState } from 'react';

function NvvApp() {
const [nvvListUsers,setNvvListUsers] = useState([]);

// đọc dữ liệu từ api
const nvvGetAllUsers = async ()=>{
  const nvvResponse = await axios.get("nvvUsers");
  console.log("Api Data:",nvvResponse.data);
  setNvvListUsers(nvvResponse.data)

}
useEffect(()=>{
nvvGetAllUsers();
console.log("State Data:",NvvListUsers);
},[])
  
  return (
    <div className="container border my-3">
      <h1>làm việc với MockApi</h1>
      <hr/>
      <NvvListUsers renderNvvListUsers={NvvListUsers}/>
    </div>
  );
}
export default NvvApp;