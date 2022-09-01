import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate  } from 'react-router';
import { Link } from 'react-router-dom';
export default function Them_pet() {
    const [tenPet, setTenPet] = useState('');
    const [giongLoai, setGiongLoai] = useState('');
    const [trangThai, setTrangThai] = useState('');
    let history = useNavigate ();
    const guiDuLieu = () => {
        axios.post(`https://630ee441498924524a8127a2.mockapi.io/PetData`, {
            tenPet,
            giongLoai,
            trangThai,
        }).then(() => {
            history.push('/danhsachpet')
        })
        console.log(tenPet);
        console.log(giongLoai);
        console.log(trangThai);
        }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Tên Pet</label>
                    <div>
                        <input placeholder='Tên pet' onChange={(e) => setTenPet(e.target.value)}/>
                    </div>
                    
                </Form.Field>
                <Form.Field>
                    <label>Giống Loài</label>
                    
                    <div>
                        <input placeholder='Giống loài' onChange={(e) => setGiongLoai(e.target.value)}/>
                    </div>
                </Form.Field>
                <Form.Field>
                    <label>Trạng Thái</label>
                    <div>
                        <input placeholder='Trạng thái' onChange={(e) => setTrangThai(e.target.value)}/>
                    </div>
                </Form.Field>
                <Link to='/danhsachpet'><Button onClick={guiDuLieu} type='submit'>Thêm</Button></Link>
                
            </Form>
        </div>
    )
}
