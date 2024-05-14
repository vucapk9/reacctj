import Reac, { useEffect, useState } from "react"
 
export default function NvvUseEffect() {
    // state: count
    const [count, setCount] = useState(0);

    // hàm xử lý sự kiện click me
    const nvvHandleClick = ()=>{
        setCount(prev => prev + 1);
    }

    // sử dụng hàm useEffect để cập nhật lại title; có một tham số
    useEffect(()=>{
            document.title = 'Nguyễn Văn Vũ: You clicked ${count} times'
            console.log('You clicked ${count} times');
    });

    //useEffect: tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("chạy lần đầu tiên - một lần");
    },[])

    //[deps]
    useEffect(()=>{
        return <h4>useEffect count click: {count}</h4>
    })
    return (
        <div>
            <h2>Demo - useEffect:You clicked {count} times</h2>
            <button onClick={nvvHandleClick}>
                 Click me
            </button>
        </div>
    )
}