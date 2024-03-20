import { Post } from "@/types";
import { PostCard } from "./postCard";

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  return (
    <div className="mt-6 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default PostsList;
