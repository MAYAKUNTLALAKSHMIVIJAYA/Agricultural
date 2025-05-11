import React,{useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Deleteuser() {
   
    let productData = useSelector(state => state);
    let object = productData[0].obj;
    let params = useParams();
   
    let navigate = useNavigate();

    var urlData = params.fpid;
  
    useEffect(()=>{
        axios.delete("http://localhost:8085/product/deletebyfpid/"+urlData)
        .then((res)=>{
           
            navigate('/SeefOrders');
        })
    } , []);

    return (
        <div>
            DELETE COMP
        </div>
    )
}
