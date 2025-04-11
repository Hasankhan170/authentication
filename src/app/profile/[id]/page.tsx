'use client'
import React from 'react'

interface ProfilePageProps {
    params: {
      id: string;
    };
  }

const page = ({params} : ProfilePageProps) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}

export default page