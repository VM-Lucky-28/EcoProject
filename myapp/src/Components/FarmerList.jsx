

// import React, { useEffect, useState } from "react";
// import Farmer from "./Farmer";
// import FarmerService from "./FarmerService";
// import { useNavigate } from "react-router-dom";

// const FarmerList =() => { 
//   const navigate = useNavigate();

//   const[loading, setLoading] = useState(true);
//   const[Farmer, setFarmer] = useState(null);

//   useEffect(()=>{
//     const fetchData = async () => {
//         setLoading(true);
//         try{
//             const response = await FarmerService.getFaemers();
//             setFarmer(response.data);
//         }
//         catch(error){
//             console.log(error)
//         }
//         setLoading(false);
//     };
//     fetchData();
//   },[]);
//   //onclick = {()=>navigate("/Farmer")}

//   const deleteFarmer = (e,id)=> {
//     e.preventDefault();
//     FarmerService.deleteFarmer(id).then((res)=>{
//         if(Farmer){
//             setFarmer((prevElement)=>{
//             return prevElement.filter((Farmer)=>Farmer.id !==id);
//         });
//         }
//     });
//   };

//   const Navigate = useNavigate();

//  const EditFarmer = (e,id) => {
//     e.preventDefault();
//     navigate(`/editFarmer/${id}`);
//  }

//     return (

// <div className="Container mx-auto my-8">

// <div className="h-12">

// <button className="rounded bg-slate-600, text-white PX-6. P4-6   (4)">

// Add Employee

// </button>

// </div>

// <div className = "file Shadow border-b">

// <table className="min-w-full">

// <thead className="bg-gray-50">

// <tr>

// < th classname= "text-left font-medium tex-gay 500 upperCase tracking-wider py-3 px-6">

// First Name </th>

// <th  classname= "text-left font-medium tex-gay 500 upperCase tracking-wider py-3 px-6"> Last Name </th>

// <th  classname= "text-left font-medium tex-gay 500 upperCase tracking-wider py-3 px-6"> email</th>

// <th classname= "text-left font-medium tex-gay 500 upperCase tracking-wider py-3 px-6"> CropQuantity </th>

// <th classname= "text-left font-medium tex-gay 500 upperCase tracking-wider py-3 px-6"> CropType </th>

// <th classname= "text-left font-medium tex-gay 500 upperCase tracking-wider py-3 px-6"> Price </th>

//   <th classname= "text-right font-medium tex-gay 500 upperCase tracking-wider py-3 px-6"> Actions </th>

// </tr>

// </thead>
//  {! loading &&(

// <tbody class klame = " bg_white">
//     {Farmer.map((Farmer)=>(
//     <tr key {Farmer.id}>
//         <td className="text-left px-6 py-4 whitespace-nowrap">
//             <div className="text-sm text-gray-500">{Farmer.firstName}</div>
//         </td>
//         <td className="text-left px-6 py-4 whitespace-nowrap">
//             <div className="text-sm text-gray-500">{Farmer.lastName}</div>
//         </td>
//         <td className="text-left px-6 py-4 whitespace-nowrap">
//             <div className="text-sm text-gray-500">{Farmer.email}</div>
//         </td>
//         <td className="text-left px-6 py-4 whitespace-nowrap">
//             <div className="text-sm text-gray-500">{Farmer.cropquantity}</div>
//         </td>
//         <td className="text-left px-6 py-4 whitespace-nowrap">
//             <div className="text-sm text-gray-500">{Farmer.croptype}</div>
//         </td>
//         <td className="text-left px-6 py-4 whitespace-nowrap">
//             <div className="text-sm text-gray-500">{Farmer.price}</div>
//         </td>

//         <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
//             <a onClick={(e,id)=>EditFarmer(e,id)} className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
//                 Edit </a>
        
//         <a onClick={(e,id)=>deleteFarmer(e,Farmer.id)} className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
//                 Delete </a>
//                 </td> 
//       </tr>
//       ))}
//     </tbody> 
//     )}
//     </table>
//     </div>
//     </div>
//     );
// }

// export default FarmerList;