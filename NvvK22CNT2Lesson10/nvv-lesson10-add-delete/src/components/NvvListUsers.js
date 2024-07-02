import React from 'react'

export default function NvvListUsers(renderNvvListUsers,onNvvDelete){
    console.log("NvvListUsers:",renderNvvListUsers);
    //hiện thị dữ liệu
    let nvvElementUser = renderNvvListUsers.map((nvvUser,index)=>{
        return(
            <>
             <tr>
                        <td>{nvvUser.id}</td>
                        <td>{nvvUser.UserName}</td>
                        <td>{nvvUser.Password}</td>
                        <td>{nvvUser.Email}</td>
                        <td>{nvvUser.Phone}</td>
                        <td>
                            <button className='btn btn-danger' onClick={nvvHandleDlete(nvvUser)}>Delete</button>
                        </td>

             </tr>
            </>
        )
    })
    const nvvHandleDlete = async (param)=> {
        if(window.confirm('Bạn có muốn xóa thật không?')){
   const nvvRes = await axios.delete("nvvUsers/"+param.id);
        }
        onNvvDelete()
    }
    return(
        <div className='row'>
            <table className='table table-border'>
                <thead>
                    <tr>
                      <th>Id</th>
                      <th>UsersName</th>
                      <th>Password</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {nvvElementUser}
                </tbody>
            </table>
        </div>
    )
}