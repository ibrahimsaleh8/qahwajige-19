import { APP_URL, CurrentProjectId, currentURL } from "@/lib/ProjectId";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "خدمات الضيافة | مقالات عن القهوة العربية وتنظيم المناسبات",
  description:
    "اكتشف مقالات متخصصة في خدمات الضيافة، القهوة العربية، وتنظيم المناسبات، مع نصائح احترافية وأفكار ملهمة للارتقاء بتجربة ضيوفك.",
  alternates: {
    canonical: `${currentURL}/blog`,
  },
  openGraph: {
    title: "خدمات الضيافة | مقالات عن القهوة العربية وتنظيم المناسبات",
    description:
      "اكتشف مقالات متخصصة في خدمات الضيافة، القهوة العربية، وتنظيم المناسبات، مع نصائح احترافية وأفكار ملهمة للارتقاء بتجربة ضيوفك.",
    url: `${currentURL}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات الضيافة | مقالات عن القهوة العربية وتنظيم المناسبات",
    description:
      "اكتشف مقالات متخصصة في خدمات الضيافة، القهوة العربية، وتنظيم المناسبات، مع نصائح احترافية وأفكار ملهمة للارتقاء بتجربة ضيوفك.",
  },
};

export default async function ArticlesPage() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles/category/خدمات-الضيافة`,
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
      <div className="container mx-auto px-6">
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
          <div className="grid md:gap-6 gap-3 grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                href={`/${article.title.split(" ").join("-")}`}
                className="group flex flex-col bg-card-background border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                {/* Image */}
                {article.coverImage ? (
                  <div className="relative w-full md:aspect-4/3 aspect-3/2 overflow-hidden">
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
                <div className="md:p-6 p-2 flex flex-col flex-1">
                  <h2 className="md:text-lg text-base font-bold mb-4 text-main-black leading-snug line-clamp-2">
                    {article.title}
                  </h2>

                  {article.content && (
                    <p className="md:text-sm text-xs text-low-color leading-relaxed line-clamp-3 mb-8 flex-1">
                      {article.content.replace(/<[^>]+>/g, "")}
                    </p>
                  )}

                  {/* Footer */}
                  <span className="text-low-color block mb-2">
                    {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <p className="font-bold text-xs w-full py-2 text-center bg-black text-white flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                    اقرأ المقال
                    <ArrowLeft
                      className="w-4 h-4 text-main-color"
                      strokeWidth={2.5}
                    />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
