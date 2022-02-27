import React from "react";
import './styles.css'

export default function FirstPage({setSelected}){
    setSelected('first_page');
    return (
        <div className="first_page">Первая страница</div>
    )
}