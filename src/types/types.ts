import { Prisma } from '@prisma/client';

export type IUser = Prisma.UserGetPayload<{
  include: {
    Post: true;
    Comment: true;
  };
}>;

export type IPost = Prisma.PostGetPayload<{
  include: {
    author: true;
    comments: true;
  };
}>;

type FullComment = Prisma.CommentGetPayload<{
  include: {
    author: true;
    post: true;
    children: {
      include: { author: true }
    };
    parent: true;
  };
}>;

export type IComment = Omit<FullComment, 'post' | 'parent' | 'children'> &
  Partial<Pick<FullComment, 'post' | 'parent' | 'children'>>;


// export interface IPost {
//     id: number,
//     cover: string,
//     title: string,
//     slug: string,
//     body: string,
//     markdown: string,
//     createdAt: Date,
//     updatedAt: Date,
//     authorId: number,
//     author: {
//         name?: string,
//         username: string,
//         avatar: string
//     }
//     likes: number,
//     comments: Array<IComment>
// }

// export interface IComment {
//     id: number,
//     text: string,
//     // createdAt: Date,
//     // updatedAt: Date,
//     // authorId: number,
//     author?: {
//         name?: string,
//         username: string,
//         avatar: string
//     }
//     // parentId: number,
//     // postId: number
//     // post?:  Post @relation(fields: [postId], references: [id])
//     // parent Comment? @relation("CommentChildren", fields: [parentId], references: [id])
//     // children Comment[] @relation("CommentChildren")
// }