import React, { useState,useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate  } from 'react-router';
import { Link } from 'react-router-dom';
export default function Cap_nhat_pet(){
    const [tenPet, setTenPet] = useState('');
    const [giongLoai, setGiongLoai] = useState('');
    const [trangThai, setTrangThai] = useState('');
    const [id, setID] = useState(null);
    let history = useNavigate ();
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTenPet(localStorage.getItem('Tên Pet'));
        setGiongLoai(localStorage.getItem('Giống Loài'));
        setTrangThai(localStorage.getItem('Trạng Thái'))
    }, []);
    const updateAPIData = () => {
        axios.put(`https://630ee441498924524a8127a2.mockapi.io/PetData/${id}`, {
            tenPet,
            giongLoai,
            trangThai
        }).then(() => {
            history.push('/danhsachpet')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Tên Pet</label>
                    <div>
                        <input placeholder='Tên pet' value={tenPet} onChange={(e) => setTenPet(e.target.value)}/>
                    </div>
                    
                </Form.Field>
                <Form.Field>
                    <label>Giống Loài</label>
                    
                    <div>
                        <input placeholder='Giống loài' value={giongLoai} onChange={(e) => setGiongLoai(e.target.value)}/>
                    </div>
                </Form.Field>
                <Form.Field>
                    <label>Trạng Thái</label>
                    <div>
                        <input placeholder='Trạng thái' value={trangThai} onChange={(e) => setTrangThai(e.target.value)}/>
                    </div>
                </Form.Field>
                <Link to='/danhsachpet'><Button type='submit' onClick={updateAPIData}>Cập Nhật</Button></Link>
                
            </Form>
        </div>
    )
}