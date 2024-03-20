"use client";

import PageContainer from "@/components/Page-container";
import PostsList from "@/components/postsList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
 import { Category } from "@/types";
 import { CATEGORIES } from "@/utils/categories";
import { POSTS } from "@/utils/posts";
 import Link from "next/link";


export default function Home() {
  
  return (
    <PageContainer>
      <div className="py-10 px-4">
        {/* 1ère section */}
        <div className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden" style={{backgroundImage: "url(/img/hero.jpg)"}}>
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
              <h1 className="text-center font-bold text-3xl sm:text-5xl text-black dark:text-white">Become A Better React Developper
              </h1>
              <Input className="dark:bg-white mt-4" type="email" placeholder="Email"/>
              {/* <input className="dark:bg-white w-full rounded-sm h-[50px] px-1 mt-4" type="email" placeholder="Email"/> */}
              <Button className="w-full py-6 text-xl mt-4" size="lg">Subscribe to our Newsletter</Button>
            </div>
          </div>
        </div>

        {/* categories section */}
        { <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center items-center">
          {CATEGORIES.map((category: Category) => (
            <Button variant="outline" key={category.id}>
              <Link href={`/categories/${category.slug}`}>
                {category.name}
              </Link>
            </Button>
          ))}
        </div> }

        {/* Posts */}
        <PostsList posts={POSTS}/>
      </div>
    </PageContainer>
  );
}
