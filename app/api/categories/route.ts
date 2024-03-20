import { Category } from "@/types"
import { NextResponse } from "next/server"

const CATEGORIES: Category[] = [
  { id: 1, name: "React", slug: "react"},
  { id: 2, name: "React Native", slug: "react-native"},
  { id: 3, name: "Javascript", slug: "javascript"},
  { id: 4, name: "Nextjs", slug: "nextjs"},
  { id: 5, name: "Css", slug: "css"},
]

export const GET = async() => {
  return NextResponse.json(CATEGORIES, {status: 200});
};