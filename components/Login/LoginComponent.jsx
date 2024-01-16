'use client'
import React, { useEffect } from "react";
// import { Google } from "@mui/icons-material";
import { useRouter } from "next/navigation";
// import mainlogo from "../../assets/ayatriologo.png";
// import axios from "axios";
import Image from "next/image";

const LoginComponent = () => {
  const router=useRouter()

  const checkUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8080/auth/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;

      if (data.isAuthenticated) {
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      window.open("http://localhost:8080/auth/google/callback", "_self");
    } catch (error) {
      console.error("Error initiating Google OAuth:", error);
    }
  };

  return (
    <div className="flex items-center transform translate-y-14 justify-center sm:px-[50px] px-[20px]">
      <div className="bg-white">
        <div className="img__con111 sm:block flex items-center justify-center">
          <Image src="/ayatriologo.png" width={60} height={30} alt="logo" className="w-48 m-2" />
        </div>

        <div className=" break-words mt-[30px] mb-[10px] w-full text-black sm:text-[30px] text-xl font-[600] -tracking-[1.2px] sm:block flex items-center justify-center  ">
          <h3>Wellcome to ayatrio family profile</h3>
        </div>
        <div
          className="Modal_subtitle mb-[38px] sm:w-[60%] sm:text-left text-center flex items-center justify-center"
         
        >
          Become a member of Ayatrio Family today. It's free to join? Get the
          details.
        </div>
        <div className="sm:block flex justify-center items-center">
          <button
            onClick={handleGoogleLogin}
            className="text-white bg-black text-lg rounded-full font-semibold py-3 px-4 flex items-center justify-center sm:w-3/5 w-52"
          >
            {/* <Google className="mr-2" /> */}
            Login with Google
          </button>
        </div>
        <div className="gflbutton">
          <div className="BzWZlf sm:block flex items-center justify-center">
            <div className="text-black border border-black bg-white sm:text-lg text-base my-2.5 rounded-full font-semibold py-3 px-4 flex items-center justify-center sm:w-3/5 w-64">
              Sign up with phone or email
            </div>
          </div>
        </div>
        <div className="terms flex flex-row gap-3">
        <input type="checkbox" />
          <span className="mtp text-xs">
            By continuing, you agree to Ayatrio's{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              data-test-id="tos"
              href="/_/_/policy/terms-of-service/"
            >
              Terms of Service
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              data-test-id="privacy"
              href="/_/_/policy/privacy-policy/"
            >
              Privacy policy
            </a>{" "}
            including{" "}
            <a target="_blank" rel="noopener noreferrer" data-test-id="privacy">
              {" "}
              Cookie Use{" "}
            </a>
            .{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
