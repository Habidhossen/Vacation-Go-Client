import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState

  return (
    <section>
      <div className="card w-96 mx-auto shadow-sm bg-base-100 mt-4">
        <div className="card-body flex items-center text-center">
          <h1 className="text-center text-xl font-semibold mb-4">My Profile</h1>
          <div class="avatar">
            <div class="w-28 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
              {user.photoURL !== null ? (
                <img src={user.photoURL} />
              ) : (
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" />
              )}
            </div>
          </div>
          <div>
            <p className="mt-4 mb-2">Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
