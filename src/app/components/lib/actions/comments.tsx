'use server';
import { json_api_url } from "@/app/constants/Index";
export async function getComments() {
    let response = await fetch(`${json_api_url}/comments?_limit=50`);
    let data = (await response.json()) as JsonPlaceholder.Comment[];
    return data;
}

export async function getCommentById(photoId: number) {
    let response = await fetch(`${json_api_url}/comments/${photoId}`);
    let data = (await response.json()) as JsonPlaceholder.Comment;
    return data;
}