import axios from'../api/nvvApi'
import React, { useEffect, useState } from 'react'

export default function NvvFormAddOrEdit({onNvvClose, onNvvSumbmitForm, renderUsers}) {
   console.log(renderUsers);
   const [nvvId, setNvvId] = useState(0);
   const [nvvUserName,setNvvUserName] = useState("");
   const [nvvPassword,setNvvPassword] = useState("");
   const [nvvEmail,setNvvEmail] = useState("");
   const [nvvPhone,setNvvPhone] = useState("");

   useEffect(()=>{
    setNvvId(renderUsers.id)
    setNvvUserName(renderUsers.UserName)
    setNvvPassword(renderUsers.Password)
    setNvvEmail(renderUsers.Email)
    setNvvPhone(renderUsers.Phone)
   },[renderUsers])

   const nvvHandleClose = ()=> {
     onNvvClose(false);
   }

   const nvvHandleSumbmit=(event)=>{
     EventTarget.preventDefault();
     console.log(nvvId,nvvUserName,nvvPassword,nvvEmail,nvvPhone);
     // post -> api
     let nvvObjUser = {
      UserName: nvvUserName,
      Password: nvvPassword,
      Email: nvvEmail,
      Phone: nvvPhone,
      Id: nvvId
     }
     const nvvRes = await; axios.post("nvvUsers",nvvObjUser);

     
   }
    return (
      <div className='border'>
          <form>
          <div className="input-group mb-3">
               <span className="input-group-text" id="id">ID</span>
               <input type="text" class="form-control" 
                  name='id' value={nvvId} onChange={(ev)=>setNvvId(ev.target.value)}
               placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
          <div className="input-group mb-3">
               <span className="input-group-text" UserName="UserName"></span>
               <input type="text" class="form-control" 
                  name='UserName' value={nvvUserName}  onChange={(ev)=>setNvvUserName(ev.target.value)}
               placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
        </div>
        <div className="input-group mb-3">
                 <span className="input-group-text" id="Password">Password</span>
                <input type="password" class="form-control" 
                   name='Password' value={setNvvPassword}  onChange={(ev)=>setNvvPassword(ev.target.value)}
                    placeholder="Password" aria-label="Password" aria-describedby="Password"/>
       </div>
        <div className="input-group mb-3">
                 <span className="input-group-text" id="Email">Email</span>
                <input type="password" class="form-control" 
                   name='Email' value={nvvEmail}  onChange={(ev)=>setNvvEmail(ev.target.value)}
                    placeholder="Email" aria-label="Email" aria-describedby="Email"/>
       </div>
        <div className="input-group mb-3">
               <span className="input-group-text" id="Phone">Phone</span>
               <input type="mumber" class="form-control" 
                   name='Phone' value={nvvPhone}   onChange={(ev)=>setNvvPhone(ev.target.value)}
                   placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
          </div>
          <button className='btn btn-primary' name='btnNvvSave' onClick={(ev)=>nvvHandleSumbmit(ev)}>Ghi lại</button>
          <button className='btn btn-danger' onClick={nvvHandleClose}>Đóng</button>
         </form>
         </div>
    )
    }
