import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./_components/ShareButtons";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Article = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

type GetArticleResponse = {
  success: boolean;
  data: {
    article: Article;
  };
};

type Props = {
  params: Promise<{ title: string }>;
};

export async function generateStaticParams() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles`,
    { cache: "force-cache" },
  );
  if (!res.ok) return [];
  const data = await res.json();
  const articles = data.data.articles as { title: string }[];
  return articles.map((article) => ({
    title: article.title.split(" ").join("-"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedTitle = (await params).title.split("-").join(" ");
  const res = await fetch(`${APP_URL}/api/article/title/${decodedTitle}`);
  if (!res.ok) {
    return {
      title: "مقال غير موجود",
      description: "هذا المقال غير متوفر حالياً",
    };
  }
  const data = await res.json();
  const article = data.data.article;
  const url = `${APP_URL}/articles/${(await params).title}`;
  return {
    title: article.title,
    openGraph: {
      title: article.title,
      url,
      type: "article",
      locale: "ar_SA",
      images: article.coverImage
        ? [
            {
              url: article.coverImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const res = await fetch(
    `${APP_URL}/api/article/title/${title.split("-").join(" ")}`,
  );
  if (!res.ok) notFound();

  const data: GetArticleResponse = await res.json();
  const article = data.data.article;

  return (
    <main className="min-h-screen bg-[var(--main-background)]" dir="rtl">
      <div className="max-w-5xl mx-auto px-6 py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--main-black)] mb-16 border-b border-transparent hover:border-[var(--main-color)] transition-all duration-300">
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          الرجوع إلى المقالات
        </Link>

        {/* Article container */}
        <article className="bg-[var(--card-background)] border border-black/10">
          {/* Cover Image */}
          {article.coverImage && (
            <div className="relative w-full aspect-[16/7] overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-16">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-8 text-sm text-[var(--low-color)]">
              <span className="font-semibold text-black">مقال</span>

              <span>
                {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--main-black)] uppercase tracking-tight mb-8">
              {article.title}
            </h1>

            {/* Accent Line */}
            <div className="w-24 h-1 bg-[var(--main-color)] mb-12" />

            {/* Body */}
            {article.content && (
              <div
                className="
                  article-content
                  prose max-w-none
                  prose-headings:text-[var(--main-black)]
                  prose-headings:font-bold
                  prose-p:text-[var(--low-color)]
                  prose-p:leading-relaxed
                  prose-a:text-[var(--main-color)]
                  prose-a:no-underline
                  hover:prose-a:underline
                  prose-strong:text-[var(--main-black)]
                  prose-li:text-[var(--low-color)]
                  prose-blockquote:border-r-4
                  prose-blockquote:border-[var(--main-color)]
                  prose-blockquote:text-[var(--low-color)]
                  prose-hr:border-black/10
                "
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}

            {/* Share */}
            <div className="mt-16 pt-8 border-t border-black/10">
              <ShareButtons title={article.title} />
            </div>
          </div>
        </article>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-[var(--main-black)] hover:gap-3 transition-all duration-300">
            عرض جميع المقالات
            <ArrowLeft className="w-4 h-4 text-[var(--main-color)]" />
          </Link>
        </div>
      </div>
    </main>
  );
}
