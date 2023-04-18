import React from 'react';
import Image from 'next/image';
import useUser from '@/hooks/useUser';
import Avatar from '../Avatar';

type Props = {
  userId: string;
};

function UserHero({ userId }: Props) {
  const { data: fetchedUser } = useUser(userId);

  return (
    <div className='bg-neutral-700 h-44 relative'>
      {fetchedUser?.coverImage && (
        <Image fill src={fetchedUser.coverImage} alt='cover image' style={{ objectFit: 'cover' }} />
      )}
      <div className='absolute -bottom-16 left-4'>
        <Avatar userId={userId} isLarge hasBorder />
      </div>
    </div>
  );
}

export default UserHero;
