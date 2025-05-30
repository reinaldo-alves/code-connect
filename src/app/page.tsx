import { CardPost } from "@/components/CardPost";
import styles from "./page.module.css";
import { IPost } from "@/types/types";
import logger from "./logger";
import Link from "next/link";
import db from "../../prisma/db";
import { Prisma } from "@prisma/client";

async function getPosts (page: number, searchTerm: string | undefined) {
  try {
    const where : Prisma.PostWhereInput = {}
    if (searchTerm) {
      where.title = { contains: searchTerm, mode: 'insensitive' }
    }
    const perPage = 6;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({ where });
    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;
    const response = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { createdAt: 'desc' },
      include: { author: true }
    });
    logger.info('Posts obtidos com sucesso!');
    return { data: response, prev, next };
  } catch (error) {
    logger.error('Falha ao obter posts', { error });
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }: {searchParams: Record<string, string | undefined>}) {
  const currentPage = parseInt(searchParams?.page || '1');
  const searchTerm = searchParams?.q;
  const { data: posts, prev, next } = await getPosts(currentPage, searchTerm);
  return (
    <main className={styles.main}>
      {posts.map((post: IPost) => <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={{pathname: '/', query: {page: prev, q: searchTerm}}}>Página anterior</Link>}
        {next && <Link href={{pathname: '/', query: {page: next, q: searchTerm}}}>Próxima página</Link>}
      </div>
    </main>
  );
}
