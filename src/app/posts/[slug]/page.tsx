import logger from "@/app/logger";
import { remark } from "remark";
import html from 'remark-html';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { CardPost } from "@/components/CardPost";
import styles from './page.module.css';
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";
import { CommentList } from "@/components/CommentList";

async function getPostBySlug(slug: string) {
    try {
        const post = await db.post.findFirst({
            where: { slug },
            include: { 
                author: true,
                comments: {
                    include: {
                        author: true,
                        children: {
                            include: { author: true }
                        }
                    },
                    where: { parentId: null }
                }
            }
        });
        if(!post) {
            throw new Error(`Post com o slug ${slug} não foi encontrado`);
        }
        const processedContent = await remark()
            .use(html)
            .process(post.markdown);
        const contentHtml = processedContent.toString();
        const window = new JSDOM('').window;
        const purify = DOMPurify(window);
        const sanitizedHtml = purify.sanitize(contentHtml);
        post.markdown = sanitizedHtml;
        return post;
    } catch (error) {
        logger.error('Falha ao obter o post com o slug: ', slug, error);
    }
    redirect('/not-found');
}

const PagePost = async ({ params }: { params: Promise<{slug: string}> }) => {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    return (
        <main className={styles.main}>
            <CardPost post={post} highlight />
            <h3 className={styles.subtitle}>Código:</h3>
            <div className={styles.code}>
                <div dangerouslySetInnerHTML={{__html: post ? post.markdown : ''}} />
            </div>
            <div>
                <CommentList comments={post.comments} />
            </div>
        </main>
    )
}

export default PagePost