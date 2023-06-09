import useUser from '@/hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

type Props = {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
};

function Avatar({ userId, isLarge, hasBorder }: Props) {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();
  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div>
      <div
        className={`
  ${hasBorder ? 'border-4 border-black' : ''}
  ${isLarge ? 'h-32' : 'h-12'}
  ${isLarge ? 'w-32' : 'w-12'}
  rounded-full
  hover:opacity-90
  transition
  cursor-pointer
  relative
  `}>
        <Image
          fill
          style={{ objectFit: 'cover', borderRadius: '100%' }}
          onClick={onClick}
          alt='Avatar'
          src={fetchedUser?.profileImage || '/images/placeholder.png'}
        />
      </div>
    </div>
  );
}

export default Avatar;
