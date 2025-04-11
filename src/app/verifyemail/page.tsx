"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
const VerifyUser = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
//   const router = useRouter();

  const sendEmail = async () => {
    try {
      const response = await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      setError(false)
    } catch (error: any) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    setError(false);
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
    //    const {query} = router;
    //    const urlTokenTwo = query.token
  }, []);

  useEffect(() => {
    setError(false);
    if (token.length > 0) {
      sendEmail();
    }
  }, [token]);

  return (
    <div>
      <h1>Verify Email</h1>
      <h2>{token ? `${token}` : `Token not found`}</h2>
      {verified && (
        <div>
          <h2>Email verified successfully</h2>
          <Link href={"/login"}>Login </Link>
        </div>
      )}

      {error && (
        <div>
          <h2>Error</h2>
          
        </div>
      )}
    </div>
  );
};

export default VerifyUser;
