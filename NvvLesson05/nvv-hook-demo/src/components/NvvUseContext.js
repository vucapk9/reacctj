import React, { useContext, useState } from "react"
import NvvUseContext1 from './NvvUseContext1';
export const ThemeContext = useContext(''); // tạo ngữ cảnh để chia sẻ

export default function NvvUseContext() {
    // state
    const [theme,setTheme] = useState('red');

    // hàm thay đổi theme
    const nvvHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
return(
    <ThemeContext.Provider value={theme}>
    <div className='alert'>
      <h2>Demo useContext</h2>
      <NvvUseContext1/>
      <button>Change bgClick={nvvHandleChange}Change bgColor</button>
    </div>
    </ThemeContext.Provider>
)
}