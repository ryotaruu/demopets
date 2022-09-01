import React, { useEffect,useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Danh_sach_pet() {
    const [APIData, setAPIData] = useState([]);
    
    useEffect(() => {
        axios.get(`https://630ee441498924524a8127a2.mockapi.io/PetData`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    const setData = (data) => {
        let { id, tenPet, giongLoai, trangThai } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Tên Pet', tenPet);
        localStorage.setItem('Giống Loài', giongLoai);
        localStorage.setItem('Trạng Thái', trangThai)
     }
     const getData = () => {
        axios.get(`https://630ee441498924524a8127a2.mockapi.io/PetData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
     const onDelete = (id) => {
        axios.delete(`https://630ee441498924524a8127a2.mockapi.io/PetData/${id}`)
        .then(() => {
            getData();
        })
    }
    
    return (
        <div>
            
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Tên</Table.HeaderCell>
                        <Table.HeaderCell>Giống Loài</Table.HeaderCell>
                        <Table.HeaderCell>Trạng Thái</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.tenPet}</Table.Cell>
                                <Table.Cell>{data.giongLoai}</Table.Cell>
                                <Table.Cell>{data.trangThai}</Table.Cell>
                                <Table.Cell><Link to='/capnhatpet'><button onClick={() => setData(data)}>Cập Nhật</button></Link></Table.Cell>
                                <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                            </Table.Row>
                    )})}
                </Table.Body>
            </Table>
            <div>
                <Link to="/thempet">
                    <Button>Thêm Pet</Button>
                </Link>
                <Link to="/">
                    <Button style={{marginLeft: "20px"}}>Quay Lại</Button>
                </Link>
                <Link to="/danhsachlocpet">
                    <Button style={{marginLeft: "20px"}}>Lọc Pet</Button>
                </Link>
            </div>
        </div>
    )
}