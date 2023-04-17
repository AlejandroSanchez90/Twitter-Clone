import React from 'react';
import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs';
type Props = {};

function SidebarLogo({}: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/')}
      className='rounded-full h-14 w-14 p-4 items-center flex justify-center hover:bg-blue-100 hover:bg-opacity-10 cursor-pointer transition'>
      <BsTwitter size={28} color='white' />
    </div>
  );
}

export default SidebarLogo;
