import Header from '@/components/Header';
import { NextPageContext } from 'next';
import React from 'react';
import { getSession } from 'next-auth/react';
import NotificationsFeed from '@/components/NotificationsFeed';

type Props = {};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

function Notifications({}: Props) {
  return (
    <>
      <Header label='Notifications' showBackArrow />
      <NotificationsFeed />
    </>
  );
}

export default Notifications;
