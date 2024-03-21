"use client"

import PageContainer from "@/components/Page-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { usePost } from "@/hooks/usePost";
import { Params } from "@/types";
import { Eye, MessageCircle } from "lucide-react";



function SinglePostPage({ params }: Params) {
  const {slug} = params
  const {data: post, isFetching, error} = usePost(slug)

  if (isFetching) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <PageContainer>
      <div className="p-8">
        <div
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden"
          style={{ backgroundImage: "url(/img/hero.jpg)" }}
        >
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
              <h1 className="text-center font-bold text-3xl sm:text-5xl text-black dark:text-white">
                {post?.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 mb-3">
          <div className="flex justify-center items-center gap-3">
            <Avatar>
              <AvatarImage src="/img/xavatario.png" />
              {/* <AvatarFallback>{post.author}</AvatarFallback> */}
            </Avatar>
            <div>
              {/* <p>{post.author}</p> */}
              {post?.createdAt && <p className="text-slate-500 text-sm">
                Posted on {new Date(post?.createdAt).toLocaleDateString()}
              </p>}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={24} />
              <p>{post?.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={24} />
              <p>{post?.view}</p>
            </div>
          </div>
        </div>
        <Separator />

        {/* section 2 */}
        <div 
          className="mt-6" 
          dangerouslySetInnerHTML={{
          __html: post?.content as string,
        }}>
        </div>
      </div>
    </PageContainer>
  );
}

export default SinglePostPage;
