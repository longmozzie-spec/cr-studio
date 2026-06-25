import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sub",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crstudio.vn"),
  title: {
    default: "CR Studio – Studio Của Mọi Doanh Nghiệp",
    template: "%s · CR Studio",
  },
  description:
    "CR Studio – Studio của mọi doanh nghiệp. Dịch vụ dựng video cinematic chuyên nghiệp – Map Animation, Color Grading, Motion Graphics.",
  keywords: [
    "dựng video bất động sản",
    "map animation",
    "video marketing BĐS",
    "color grading",
    "motion graphics",
    "CR Studio",
  ],
  authors: [{ name: "CR Studio" }],
  creator: "CR Studio",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://crstudio.vn",
    siteName: "CR Studio",
    title: "CR Studio – Dựng Video Bất Động Sản Chuyên Nghiệp",
    description:
      "Chuyên Map Animation & dựng video bất động sản cinematic. Biến footage thô thành video marketing thu hút – tối ưu hiệu quả quảng cáo.",
    images: [
      {
        url: "/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "CR Studio – Dựng Video Bất Động Sản",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CR Studio – Dựng Video Bất Động Sản Chuyên Nghiệp",
    description:
      "Map Animation & dựng video BĐS cinematic. Chuyên nghiệp – Ấn tượng – Hiệu quả.",
    images: ["/hero-bg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://crstudio.vn/#organization",
        "name": "CR Studio",
        "url": "https://crstudio.vn",
        "logo": "https://crstudio.vn/logo.png",
        "description": "Studio chuyên dựng video cinematic, Color Grading, Motion Graphics, Map Animation cho doanh nghiệp tại Việt Nam.",
        "telephone": "+84945657611",
        "email": "Editornghiepdu93@gmail.com",
        "sameAs": ["https://www.facebook.com/tho.duongminh.hanhtinhxanh"],
        "areaServed": { "@type": "Country", "name": "Vietnam" },
        "founder": {
          "@type": "Person",
          "name": "Dương Minh Thơ",
          "jobTitle": "Founder & Video Editor",
          "description": "Hơn 10 năm kinh nghiệm hậu kỳ video bất động sản cinematic tại Việt Nam.",
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+84945657611",
          "contactType": "customer service",
          "availableLanguage": "Vietnamese",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "08:00",
            "closes": "21:00",
          },
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://crstudio.vn/#localbusiness",
        "name": "CR Studio",
        "url": "https://crstudio.vn",
        "image": "https://crstudio.vn/hero-bg.jpeg",
        "telephone": "+84945657611",
        "email": "Editornghiepdu93@gmail.com",
        "priceRange": "$$",
        "currenciesAccepted": "VND",
        "paymentAccepted": "Cash, Bank Transfer",
        "areaServed": { "@type": "Country", "name": "Vietnam" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Dịch Vụ Dựng Video",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dựng Video Chuyên Nghiệp", "description": "Cắt dựng từ footage theo nhịp phim, kịch bản storytelling." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Color Grading Cinematic", "description": "Chỉnh màu nâng cao tạo cảm xúc thị giác." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Motion Graphics & Effects", "description": "Text animation, chuyển cảnh, map animation." } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Map Animation", "description": "Animation bản đồ vị trí dự án chuyên nghiệp." } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://crstudio.vn/#website",
        "url": "https://crstudio.vn",
        "name": "CR Studio",
        "publisher": { "@id": "https://crstudio.vn/#organization" },
        "inLanguage": "vi-VN",
      },
    ],
  };

  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${montserrat.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
