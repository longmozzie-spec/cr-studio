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
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${montserrat.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
