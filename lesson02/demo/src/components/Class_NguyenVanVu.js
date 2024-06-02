import React, { Component } from 'react';

class Class_NguyenVanVu extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Nguyen Van Vu",
            class:"K22CNTT2"
        }
    }

     users = {
        name:"Nguyen Vu Vu",
        age:21
     }

     // hàm xử lý sự kiện
     handleChange = (Event) =>{
        this.setState({
            fullName:"Nguyen Van Bao",
        })
     }
    render(){
        return (
            <div>
                <h2>Class component Demo</h2>
                {this.users.name} - {this.users.age}

                <hr/>
                <h3>info: {this.props.info}</h3>
                <h3>Time:{this.props.time}</h3>
                <hr/>
                <h3> State:
                    FullName: {this.state.fullName}
                    Class: {this.state.class}
                </h3>
                <button>Change Name</button>
            </div>
        )
    }
}