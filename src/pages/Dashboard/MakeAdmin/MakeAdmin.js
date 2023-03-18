import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loader from "../../Shared/Loader/Loader";

const MakeAdmin = () => {
  // fetch data from database using react query
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("https://vacation-go-server.onrender.com/api/user").then((res) =>
      res.json()
    )
  );

  // loading
  if (isLoading) {
    return <Loader />;
  }

  //   handleMakeAdmin
  const makeAdmin = (email) => {
    fetch(`https://vacation-go-server.onrender.com/api/admin/${email}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        refetch();
        toast.success("Successfully made an admin", {
          theme: "colored",
          autoClose: 2000,
        });
      });
  };

  console.log(users);

  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h1 className="text-xl text-primary font-semibold mb-4">
          Members ({users.data.length})
        </h1>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {users.data.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role !== "admin" ? (
                    <button
                      onClick={() => {
                        makeAdmin(user.email);
                      }}
                      className="btn btn-error btn-xs text-white text-xs font-semibold capitalize"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <span className="bg-emerald-100 text-heading py-1 px-3 rounded-lg text-xs font-semibold">
                      Already an admin
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
