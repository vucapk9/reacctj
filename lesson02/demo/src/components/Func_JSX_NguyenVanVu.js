import React from 'react'

export default function Func_JSX_NguyenVanVu(props) {
    const users = {
        name:"Nguyen Vu Vu",
        age:21
    }
    return (
        <div>
            <h2 Function Component Demo></h2>
            <p>
                Welcome to , {users.name} - {users.age}
                <hr/>
                <h3> Props:
                    <br>FullName: {props.fullName}</br>
                    <br>Age:{props.age}</br>
                </h3>
            </p>
        </div>
    )
}