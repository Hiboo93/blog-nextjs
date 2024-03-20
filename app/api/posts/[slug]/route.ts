import { Post } from "@/types";
import { NextResponse } from "next/server";
import prisma from "@/lib/connect";

type Params = {
  params: {
    slug: string;
  }
}

const POST: Post = {
  id: 1,
  category: "React",
  title: "React State Management: Choosing the Right Solution",
  image: "/react-state-management.jpg",
  caption:
    "Explore different state management solutions in React and choose the one that fits your needs.",
  date: "2023-01-15",
  minutesToRead: 10,
  author: "John ReactDev",
  nbViews: 25,
  nbComments: 8,
  slug: "react-state-management-choosing-right-solution",
  content: "Hello",
};

export const GET = async(req: Request, { params }: Params) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { view: { increment: 1 }},
    });
    return NextResponse.json(post, {status: 200});
  } catch (error) {
    
    return NextResponse.json({
      error: "Something went wrong!"
    }, { status: 500 });
  }
};