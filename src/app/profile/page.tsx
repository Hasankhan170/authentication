"use client";
import axios from "axios";
import { log } from "console";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type User = {
  _id: string;
  name: string;
  email?: string;
};

const page = () => {
  const router = useRouter();
  const [data, setData] = useState<User | null>(null);

  const getDataFromToken = async () => {
    try {
      const res = await axios.post("/api/users/me");
      console.log(res.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromToken();
  }, []);

  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      toast.success("User logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <h1>Profile</h1>

      {!data ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
        </div>
      )}
      <hr />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default page;
