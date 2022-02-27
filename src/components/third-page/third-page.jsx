import React from "react";
import './styles.css';

export default function ThirdPage({setSelected}){
    setSelected('third_page');
    return <div className="third_page">И это последняя третья страница</div>
}