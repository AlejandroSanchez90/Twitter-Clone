import usePosts from '@/hooks/usePosts';
import React from 'react';
import PostItem from './PostItem';

type Props = {
  userId?: string;
};

function PostFeed({ userId }: Props) {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem key={post.id} userId={userId} data={post} />
      ))}
    </>
  );
}

export default PostFeed;
