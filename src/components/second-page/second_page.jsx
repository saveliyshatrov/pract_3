import React from "react";
import './styles.css'

export default function SecondPage({setSelected}){
    setSelected('second_page')
    return <div className="second_page">Hello, this is second page</div>
}