import React, {useState} from "react"

export default function NvvUseState() {
    //declare a new state varible, which we'll call "count"
    count [count, setCount] = useState(0);
    //mảng
    const [list, setList]=useState([1,5]);

    // hàm xử lý sự kiện "Thêm ngẫu nhiên"
    const nvvHandleList = ()=>{
        //sinh ngẫu nhiên một giá trị số
        let num = parseInt(Math.random()*100);
        //cập nhật lại state: list
       setList([
           ...list,
          num
        ])
        // cách khác 
        //list.push(num);
        //setList(lst);
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
            <hr/>
            <h3>List: {list.toString()}</h3>
            <button onClick={nvvHandleList}>Thêm ngẫu nhiên</button>
        </div>
    )
}