import React from 'react'

interface PageProps {
  params: { id: string };
}

const ProfilePage = ({ params }: PageProps) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default ProfilePage;
