import React, { useEffect,useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { Card, Input } from 'semantic-ui-react';
export default function Danh_sach_chua_ban() {
    const [APIData, setAPIData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`https://630ee441498924524a8127a2.mockapi.io/PetData`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }
    return (
        <div>
            
           
            <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Tìm Kiếm...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <table itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <tr>
                                <th>|{item.tenPet}|<span style={{color:"white"}}>|ádfasdfasdfasdfasdfasdfasdfasdfasf|</span>|{item.giongLoai}|<span style={{color:"white"}}>|ádfasdfasdfasdfasdfasdfasdfasdfasf|</span>|{item.trangThai}|</th>
                                
                            </tr>
                              
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <tr>
                                <th>|{item.tenPet}|<span style={{color:"white"}}>|ádfasdfasdfasdfasdfasdfasdfasdfasf|</span>|{item.giongLoai}|<span style={{color:"white"}}>|ádfasdfasdfasdfasdfasdfasdfasdfasf|</span>|{item.trangThai}|</th>
      
                            </tr>
                        )
                    })
                )}
            </table>
        </div>
            
            <div>
                <Link to="/danhsachpet">
                    <Button>Quay lại</Button>
                </Link>
            </div>
            
        </div>
    )
}