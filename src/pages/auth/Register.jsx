import { useCallback, useEffect, useState } from "react";
import { MdEmail, MdPerson } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import Input from "../../components/share/Input";
import Btn from "../../components/share/Btn";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/api/auth";
import { getErrorsField } from "../../utils/utils";
import { authActions } from "../../redux/slices/authSlice";
const Register = () => {
  const { error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: "",
  });
  const handelChange = (f, v) => setFormData((prev) => ({ ...prev, [f]: v }));
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register(formData, 
        setFormData({
          user_name: "",
          email: "",
          password: "",
        })
      )
    );
  };
  const resetError = useCallback(()=>{
    dispatch(authActions.setError(null));
  },[dispatch])
  useEffect(() => {
    resetError()
  }, [resetError]);
  return (
    <div className="auth w-screen h-screen flex flex-col md:flex-row gap-3 items-center justify-center px-3 md:px-6 lg:px-[100px] md:gap-[50px] lg:gap-[150px] ">
      <div className="flex flex-col items-center md:items-start w-full gap-3 text-white">
        <h1 className="text-5xl font-bold">Join Us!</h1>
        <p className="font-semibold text-center md:text-start">
          Create your account to access all the features of NEXT_MEDIA. Fill in
          the details below to get started and become part of our vibrant
          community. If you already have an account click at log in to continue
          where you left off.
        </p>
      </div>
      <div className="w-full bg-white rounded-md flex flex-col items-center py-3 lg:w-[900px] lg:gap-2">
        <h1 className="font-bold text-blue-500 text-3xl ">NEXTMEDIA</h1>
        <div className="py-[2px] rounded-lg bg-blue-500 w-20"></div>
        <form
          className="mt-3 w-full px-4 flex flex-col gap-3 lg:gap-5"
          onSubmit={handelSubmit}
        >
          <Input
            startContent={<MdPerson size="20" />}
            type="text"
            variant="underlined"
            color="primary"
            label="user name"
            defaultValue={formData.user_name}
            field="user_name"
            onChange={handelChange}
            isInvalid={getErrorsField(error, "user_name")}
            errorMessage={
              getErrorsField(error, "user_name") && (
                <ul>
                  {getErrorsField(error, "user_name")?.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              )
            }
          />
          <Input
            startContent={<MdEmail size="20" />}
            type="email"
            variant="underlined"
            color="primary"
            label="Email"
            defaultValue={formData.email}
            field="email"
            onChange={handelChange}
            isInvalid={getErrorsField(error, "email")}
            errorMessage={
              getErrorsField(error, "email") && (
                <ul>
                  {getErrorsField(error, "email")?.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              )
            }
          />
          <Input
            startContent={<AiFillLock size="20" />}
            type="password"
            variant="underlined"
            color="primary"
            label="password"
            defaultValue={formData.password}
            field="password"
            onChange={handelChange}
            isInvalid={getErrorsField(error, "password")}
            errorMessage={
              getErrorsField(error, "password") && (
                <ul>
                  {getErrorsField(error, "password")?.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              )
            }
          />
          <Btn
            fullWidth={true}
            color="primary"
            variant="ghost"
            textContent="Register"
            type="submit"
            isLoading={loading}
          />

          <div className="w-full flex justify-end gap-1">
            <span>you alrady have acount ?</span>{" "}
            <Link to="/auth/login" className="underline font-bold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
