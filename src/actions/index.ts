'use server'

import { IComment, IPost } from "@/types/types";
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

export async function postComment(post: IPost, formData: FormData) {
    // await new Promise((resolve) => setTimeout(resolve, 3500));
    const author = await db.user.findFirst({
        where: { username: 'anabeatriz_dev' }
    })
    const text = formData.get('text');
    if (author && typeof text === 'string') {
        await db.comment.create({
            data: {
                text,
                authorId: author.id,
                postId: post.id
            }
        });
        revalidatePath('/');
        revalidatePath(`/${post.slug}`);
    }
}

export async function postReply(parent: IComment, formData: FormData) {
    // await new Promise((resolve) => setTimeout(resolve, 3500));
    const author = await db.user.findFirst({
        where: { username: 'anabeatriz_dev' }
    })
    const post = await db.post.findFirst({
        where:{ id: parent.postId }
    })
    const text = formData.get('text');
    if (author && post && typeof text === 'string') {
        await db.comment.create({
            data: {
                text,
                authorId: author.id,
                postId: post.id,
                parentId: parent.parentId ?? parent.id
            }
        });
        revalidatePath(`/${post.slug}`);
    }
}