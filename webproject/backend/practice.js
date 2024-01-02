// // import React from "react";

// // const Shopeur = () => {
// //   return (
// //     <>
// //       <div className="container mt-3 mb-3">
// //         <div className="row">
// //           <div className="col ">
// //             <div className="d-flex ">
// //             <div className="me-4 ">
// //               <img
// //                 src="/electronic/logo.png"
// //                 alt=""
// //                 style={{ width: "200px" }}
// //               />
// //             </div>

// //             <div className="input-group  border " style={{ border: "none" }}>
             
// //               <select className="" style={{width:"200px"}}>
// //                 <option >ALL CATEGORY</option>
// //                 <option >Accessoris</option>
// //                 <option >hydroulic</option>
// //                 <option>Lamp</option>
// //                 <option>Avoinics</option>
// //               </select>
            
// //               <input type="text" className=" border" style={{ width: "px" ,border:"none" }} />

           
// //                 <button
// //                   className=""
// //                   type="i"
// //                 >
// //                   search
// //                 </button>
             
// //             </div>
// //             <div className="">
// //               <div>My Account</div>
// //             </div>
// //             <div className="">
// //               <div>My Cart</div>
// //             </div>
// //           </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Shopeur;







// // register


// import React from "react";
// import react
// import axios from "axios";


// import { useState } from "react";

// const Register = () => {
//     const [fname, setName] = useState('');
//     const [lastname, setlastname] = useState('');
//     const [email, setemail] = useState('');
//     const [password, setpassword] = useState('');

//     const handleSubmit= async(e)=>{
//         e.preventDefault();
//         console.log(fname,lastname,email,password)
//         try {
//             await axios.post("/api/user/register",{fname,lastname,email,password})
//           fname,lastname,email,password
    
//         } catch (error) {
//             console.log(error)
//         }
//     }


//   return (
//     <div className="container d-flex justify-content-center mb-3 mt-3">
//       <div className="row">
//         <div className="col">
//           <div className="card">
//             <div className="card-body">
//               <h1>Register</h1>
//               <form  onSubmit={handleSubmit} action="POST">
//                 <div className="mb-3 ">
//                   <label htmlFor="exampleInputEmail1" className="form-label">
//                     FirstName
//                   </label>
//                   <input
//                     type="text"
//                     value={fname}
//                     onChange={(h)=>setName(h.target.value)}
//                     className="form-control"
//                     id="1"
//                     aria-describedby="emailHelp"
//                   />
//                   <div id="2" className="form-text"></div>
//                 </div>
//                 <div className="mb-3 ">
//                   <label htmlFor="exampleInputEmail1" className="form-label">
//                     LastName
//                   </label>
//                   <input
//                     type="text"
//                     value={lastname}
//                     onChange={(h)=>setlastname(h.target.value)}
//                     className="form-control"
//                     id="3"
//                     aria-describedby="emailHelp"
//                   />
//                   <div id="4" className="form-text"></div>
//                 </div>
//                 <div className="mb-3 ">
//                   <label htmlFor="exampleInputEmail1" className="form-label">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(h)=>setemail(h.target.value)}
//                     className="form-control"
//                     id="5"
//                     aria-describedby="emailHelp"
//                   />
//                   <div id="6" className="form-text"></div>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="exampleInputPassword1" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(h)=>setpassword(h.target.value)}
//                     className="form-control"
//                     id="7"
//                   />
//                 </div>
               
//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

