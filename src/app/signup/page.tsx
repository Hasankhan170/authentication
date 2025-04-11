'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'

const SignUp = () => {
    const router = useRouter()
    const [user,setUser] = useState({
        name: "",
        email : "",
        password : ""
    })
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [loading,setLoading] = useState(false)

    const userSignup = async ()=>{
        try {
            setLoading(true)
            const response = await axios.post("/api/users/signup",user)
            console.log(response.data);
            router.push("/login")
        } catch (error) {
            console.log("signup failed : ",error);
            toast.error("Signup failed")
            
        }
    }

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0 && user.name.length > 0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[user])
  return (
   <>
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          onClick={userSignup}
          disabled={buttonDisabled || loading}
          className={`w-full py-2 rounded-lg text-white font-semibold transition-all duration-300 ${
            buttonDisabled || loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </div>
    </div>
   </>
  )
}

export default SignUp