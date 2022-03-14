import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/usersActions";
import UserItems from "./UserItems";
import ReactLoading from "react-loading";

const UsersList = () => {
  const listOfUSer = useSelector((state) => state.users.users);
  const done = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUsers());
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center text-uppercase mb-5 ">List of users</h2>

      <div className="row">
        {done ? (
          <div className="d-flex flex-wrap justify-content-between">
            <ReactLoading
              type={"bubbles"}
              color={"#0d6efd"}
              height={100}
              width={150}
            />
          </div>
        ) : (
          <>
            {listOfUSer &&
              listOfUSer.map((user) => <UserItems user={user} key={user.id} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default UsersList;
