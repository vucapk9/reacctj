import React, { useContext } from "react"
import { ThemeContext } from "./NvvUseContext"

export default function NvvUseContext2(){
    const theme = useContext(ThemeContext);
    return (
        <div className={theme + 'm-3'}>
            <h2>NvvUseContext2</h2>
            <p>
                <b>221080081</b>
                <b>Nguyễn Văn Vũ</b>
                <i>K22CNT2</i>
            </p>
        </div>
    )
}