import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Article = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

type GetArticlesResponse = {
  success: boolean;
  data: {
    articles: Article[];
    count: number;
  };
};

export default async function ArticlesPage() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data: GetArticlesResponse = await res.json();
  const articles = data.data.articles;

  return (
    <section
      id="articles"
      dir="rtl"
      className="py-24 min-h-[60vh] bg-main-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-main-black mb-16 border-b border-transparent hover:border-main-color transition-all duration-300">
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          العودة للرئيسية
        </Link>

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-main-black uppercase">
            المدونة
          </h1>

          {/* Accent Line */}
          <div className="w-24 h-1 bg-main-color mt-6 mb-8" />

          <p className="text-low-color text-lg leading-relaxed">
            مقالات ونصائح حول فن الضيافة العربية والقهوة بأسلوب يعكس الاحترافية
            والهوية السعودية العصرية.
          </p>
        </div>

        {/* Empty State */}
        {articles.length === 0 ? (
          <div className="bg-card-background border border-border-warm p-16 text-center">
            <p className="text-low-color">لا توجد مقالات متاحة حالياً.</p>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                href={`/${article.title.split(" ").join("-")}`}
                className="group flex flex-col bg-card-background border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                {/* Image */}
                {article.coverImage ? (
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-4/3 bg-main-black flex items-center justify-center">
                    <span className="text-5xl font-black text-main-color">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-main-black leading-snug line-clamp-2">
                    {article.title}
                  </h2>

                  {article.content && (
                    <p className="text-sm text-low-color leading-relaxed line-clamp-3 mb-8 flex-1">
                      {article.content.replace(/<[^>]+>/g, "")}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="border-t border-black/10 pt-6 flex items-center justify-between text-sm">
                    <span className="text-low-color">
                      {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>

                    <span className="font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      اقرأ المقال
                      <ArrowLeft
                        className="w-4 h-4 text-main-color"
                        strokeWidth={2.5}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
