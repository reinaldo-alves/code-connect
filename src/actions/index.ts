'use server'

import { IPost } from "@/types/types";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";

export async function incrementThumbsUp(post: IPost) {
    // await new Promise((resolve) => setTimeout(resolve, 3500));
    await db.post.update({
        where: { id: post.id },
        data: { likes: { increment: 1 } }
    })
    revalidatePath('/');
    revalidatePath(`/${post.slug}`);
}