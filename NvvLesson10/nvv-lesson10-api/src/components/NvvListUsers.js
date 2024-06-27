import React from 'react'

export default function NvvListUsers(renderNvvListUsers){
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
                        <td>...</td>
             </tr>
            </>
        )
    })
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