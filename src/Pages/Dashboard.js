// import React, { useEffect, useState } from "react";

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [leadsLengths, setLeadsLengths] = useState({}); // State to store lead lengths

//   useEffect(() => {
//     fetch(`https://leadvaly-server.onrender.com/users`)
//       .then((res) => res.json())
//       .then((info) => {
//         setUsers(info);
//         fetchLeadsLengths(info); // Fetch lead lengths after fetching users
//       });
//   }, []);

//   const fetchLeadsLengths = (users) => {
//     users.forEach((user) => {
//       fetch(`https://leadvaly-server.onrender.com/all-leads?leadProvider=${user.userEmail}`)
//         .then((res) => res.json())
//         .then((info) => {
//           setLeadsLengths((prevState) => ({
//             ...prevState,
//             [user.userEmail]: info.length
//           }));
//         })
//         .catch((error) => console.error("Error fetching leads length:", error));
//     });
//   };

//   return (
//     <div className="main-content">
//       <div className="page-content">
//         <div className="container-fluid">
//           {/* start page title */}
//           <div className="row">
//             <div className="col-12">
//               <div className="page-title-box d-flex align-items-center justify-content-between">
//                 <h4 className="mb-0">Latest Leads</h4>
//               </div>
//             </div>
//           </div>

//           <div className="table-responsive">
//             <table className="table table-centered border table-nowrap mb-0">
//               <thead className="table-light">
//                 <tr>
//                   <th>Name</th>
//                   <th>No of Leads</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {users.map((user) => (

//                   <>
//                    <tr key={user._id}>
//                     <td>
//                       <div className="d-flex">
//                         <div className="me-3">
//                           <img
//                             src={user.profileImage || "assets/images/users/default-avatar.jpg"}
//                             className="avatar-xs h-auto rounded-circle"
//                             alt="User Avatar"
//                           />
//                         </div>
//                         <div>
//                           <h5 className="font-size-13 text-truncate mb-1">
//                             {user.userFullName}
//                           </h5>
//                           <p className="text-muted mb-0 font-size-11 text-uppercase">
//                             {user.userEmail}
//                           </p>
//                         </div>
//                       </div>
//                     </td>
//                     <td>
//                       <h6 className="mb-1 font-size-13">
//                         {leadsLengths[user.userEmail]} {/* Corrected line */}
//                       </h6>
//                     </td>
//                   </tr>
              
//                   </>
                 

                  
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [leadsLengths, setLeadsLengths] = useState({}); // State to store lead lengths

  useEffect(() => {
    fetch(`https://leadvaly-server.onrender.com/users`)
      .then((res) => res.json())
      .then((info) => {
        setUsers(info);
        fetchLeadsLengths(info); // Fetch lead lengths after fetching users
      });
  }, []);

  const fetchLeadsLengths = (users) => {
    users.forEach((user) => {
      fetch(`https://leadvaly-server.onrender.com/all-leads?leadProvider=${user.userEmail}`)
        .then((res) => res.json())
        .then((info) => {
          setLeadsLengths((prevState) => ({
            ...prevState,
            [user.userEmail]: info.length
          }));
        })
        .catch((error) => console.error("Error fetching leads length:", error));
    });
  };

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h4 className="mb-0">Latest Leads</h4>
              </div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-centered border table-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>No of Leads</th>
                </tr>
              </thead>

              <tbody>
                {users.filter(user => leadsLengths[user.userEmail] && leadsLengths[user.userEmail] > 100).map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div className="d-flex">
                        <div className="me-3">
                          
                        </div>
                        <div>
                          <h5 className="font-size-13 text-truncate mb-1">
                            {user.userFullName}
                          </h5>
                          <p className="text-muted mb-0 font-size-11">
                            {user.userEmail}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 className="mb-1 font-size-13">
                        {leadsLengths[user.userEmail]}
                      </h6>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
