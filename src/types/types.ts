export interface IPost {
    id: number,
    cover: string,
    title: string,
    slug: string,
    body: string,
    markdown: string,
    createdAt: Date,
    updatedAt: Date,
    authorId: number,
    author?: {
        name?: string,
        username: string,
        avatar: string
    }
    likes: number,
    comments: Array<IComment>
}

export interface IComment {
    id: number,
    // text: string,
    // createdAt: Date,
    // updatedAt: Date,
    // authorId: number,
    // author?: {
    //     name?: string,
    //     username: string,
    //     avatar: string
    // }
    // parentId: number,
    // postId: number
    // post?:  Post @relation(fields: [postId], references: [id])
    // parent Comment? @relation("CommentChildren", fields: [parentId], references: [id])
    // children Comment[] @relation("CommentChildren")
}