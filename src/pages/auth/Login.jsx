import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/share/Input";
import Btn from "../../components/share/Btn";
import {useDispatch , useSelector} from "react-redux"
import { login } from "../../redux/api/auth";
import { getErrorsField } from "../../utils/utils";
import { authActions } from "../../redux/slices/authSlice";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {error,loading}= useSelector(state=>state.auth)
  const handelChange = (f, v) => setFormData((prev) => ({ ...prev, [f]: v }));
  const handelSubmit = e=>{
    e.preventDefault()
    dispatch(login(formData))
  }
  useEffect(()=>{
dispatch(authActions.setError(null))
  },[])
  return (
    <div className="auth w-screen h-screen flex flex-col md:flex-row gap-3 items-center justify-center px-3 md:px-6 lg:px-[100px] md:gap-[50px] lg:gap-[150px] ">
      <div className="flex flex-col items-center md:items-start w-full gap-3 text-white">
        <h1 className="text-5xl font-bold">Welcom Back</h1>
        <p className="font-semibold text-center  md:text-start ">
          Log in to continue where you left off. Enter your credentials below to
          access your account and enjoy a seamless experience with NEXT_MEDIA.
          If you don’t have an account yet, click on ‘register’ to join our
          community.
        </p>
      </div>
      <div className="w-full bg-white rounded-md flex flex-col items-center py-3 lg:w-[900px] lg:gap-2">
        <h1 className="font-bold text-blue-500 text-3xl ">NEXTMEDIA</h1>
        <div className="py-[2px] rounded-lg bg-blue-500 w-20"></div>
        <form className="mt-3 w-full px-4 flex flex-col gap-3 lg:gap-5" onSubmit={handelSubmit}>
          <Input
            startContent={<MdEmail />}
            type="email"
            variant="underlined"
            color="primary"
            label="Email"
            onChange={handelChange}
            defaultValue={formData.email}
            field="email"
            isInvalid={getErrorsField(error, "email")}
            errorMessage={
              getErrorsField(error, "email") && (
                <ul>
                  {getErrorsField(error, "email")?.map((e,i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              )
            }
          />
          <Input
            startContent={<AiFillLock />}
            type="password"
            variant="underlined"
            color="primary"
            label="password"
            onChange={handelChange}
            defaultValue={formData.password}
            field="password"
            isInvalid={getErrorsField(error, "password")}
            errorMessage={
              getErrorsField(error, "password") && (
                <ul>
                  {getErrorsField(error, "password")?.map((e,i) => (
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
            textContent="Login"
            type="submit"
            isLoading={loading}
          />
          <div className="w-full flex justify-end gap-1">
            <span>you dont have acount ?</span>{" "}
            <Link to="/auth/register" className="underline font-bold">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
