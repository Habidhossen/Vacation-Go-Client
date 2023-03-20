import { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loader from "../../Shared/Loader/Loader";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  // handle registration using name, email and password
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    saveUserDB(data.name, data.email);
  };

  // save user to database
  const saveUserDB = (name, email) => {
    const createUserData = { name, email };
    fetch("https://vacation-go-server.onrender.com/api/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(createUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // if user created
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  // loading
  if (loading || updating) {
    return <Loader />;
  }
  // declare a variable for store error message
  let errorMessage = "";
  // error message
  if (error || updateError) {
    errorMessage = (
      <p className="text-error text-sm">
        Error: {error?.message || updateError?.message}
      </p>
    );
  }

  return (
    <section className="h-[calc(100vh-120px)]">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-md bg-base-100 mx-auto mt-12">
        <div className="card-body">
          <h1 className="text-center text-xl font-bold mb-4">
            Sign up for free
          </h1>
          {errorMessage}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="label-text-alt text-red-500 mt-2">
                  Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="label-text-alt text-red-500 mt-2">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="label-text-alt text-red-500 mt-2">
                  Password is required
                </span>
              )}
              <label className="text-sm mt-3">
                Already have an account?
                <Link className="btn-link" to="/login">
                  {" "}
                  Login now
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="custom-primary-btn">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
