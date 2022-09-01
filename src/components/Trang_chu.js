import React from "react";
import { Link } from "react-router-dom";
export default function Trang_chu(){
    return(
        <header>
            <div className="menu">
                <Link to="/danhsachpet">
                    <h2 style={{justifyContent: "center"}}>Danh Sách</h2>
                </Link>
                
                
                
            </div>
            <div className="menu">
            <Link to="/bieudo">
                    <h2 style={{justifyContent: "center"}}>Biểu Đồ </h2>
                </Link>
            </div>
            
        </header>
    );
}