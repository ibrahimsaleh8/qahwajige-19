// app/layout.tsx
import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { APP_URL, CurrentProjectId, currentURL } from "@/lib/ProjectId";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
const mainFont = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});
type MetaDataResponseDataType = {
  title: string;
  description: string;
  keywords: string[];
  brandName: string;
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${APP_URL}/api/project/${CurrentProjectId}/metadata`,
      {
        next: {
          tags: ["metadata"],
        },
      },
    );
    const data: MetaDataResponseDataType = await res.json();

    const title = data.title;
    const description = data.description;
    const brandName = data.brandName;
    const keywords = data.keywords;

    return {
      title,
      description,
      keywords,
      creator: brandName,
      publisher: brandName,
      openGraph: {
        title,
        description,
        type: "website",
        locale: "ar_SA",
        siteName: brandName,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      alternates: {
        canonical: currentURL,
      },
    };
  } catch (error) {
    console.error("Metadata fetch failed:", error);
    return {
      title: "قهوجيين الرياض",
      description: "خدمات الضيافة العربية في الرياض",
    };
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${mainFont.className} antialiased`}>
        {children}
        <Analytics />

        <Script id="clixtell-tracking" strategy="afterInteractive">
          {`
            var script = document.createElement('script');
            var prefix = document.location.protocol;
            script.async = true;
            script.type = 'text/javascript';
            var target = prefix + '//scripts.clixtell.com/track.js';
            script.src = target;
            document.head.appendChild(script);
          `}
        </Script>

        <noscript>
          <img
            src="//tracker.clixtell.com/track/t.gif"
            alt="clixtell-tracker"
          />
        </noscript>
      </body>
    </html>
  );
}
