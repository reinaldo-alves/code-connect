import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import db from "../../../../../../prisma/db";


export async function GET(_request: Request, { params }: { params: Params } ) {
    const replies = await db.comment.findMany({
        where: { parentId: parseInt(params.id) },
        include: { author: true }
    })
    return Response.json(replies)
}
