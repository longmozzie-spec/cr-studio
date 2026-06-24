"use client";

import { useState, useEffect, useRef } from "react";
import {
  Phone, Mail, Play, CheckCircle2, ChevronRight,
  Film, Layers, Palette, Music, Video, Star, ArrowRight,
  MapPin, Clock, Shield, Award, Users, Zap, Eye, MessageSquare
} from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { GlobalMouseGlow } from "@/components/ui/global-mouse-glow";
import { VideoModal } from "@/components/ui/video-modal";

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Về Chúng Tôi", href: "#about" },
    { label: "Dịch Vụ", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Quy Trình", href: "#process" },
    { label: "Bảng Giá", href: "#pricing" },
    { label: "Liên Hệ", href: "#contact" },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border border-[#D4A853]/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
          : "bg-black/30 backdrop-blur-md border border-white/5"
      }`}
    >
      <nav aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="CR Studio homepage">
          <img src="/logo.png" alt="CR Studio logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-[#D4A853] hover:bg-[#F0C870] text-black font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
        >
          <Phone size={14} />
          Tư Vấn Ngay
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden text-white cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-0.5 bg-[#D4A853] mb-1" />
          <div className="w-5 h-0.5 bg-[#D4A853] mb-1" />
          <div className="w-5 h-0.5 bg-[#D4A853]" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-white/5 mt-2 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-[#D4A853] text-sm transition-colors cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
      </nav>
    </header>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Building background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Layer 2: Strong dark tint */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Layer 3: Subtle shader whisper – very low opacity */}
      <div className="absolute inset-0 mix-blend-screen opacity-15 pointer-events-none">
        <ShaderAnimation />
      </div>

      {/* Layer 4: Film grain noise for cinematic feel */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='3' /></filter><rect width='100%' height='100%' filter='url(%23n)' /></svg>")`,
        }}
      />

      {/* Layer 5: Vignette + bottom fade for text readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,8,8,0.8)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />


      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">

        <h1 className="font-[family-name:var(--font-heading)] font-black mb-8" style={{ fontSize: "clamp(2.25rem, 7vw, 6rem)", lineHeight: "1.15" }}>
          <span className="text-white block">CR Studio</span>
          <span className="shimmer-text block">Studio Của Mọi</span>
          <span className="text-white block">Doanh Nghiệp</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
          CR Studio - Studio của mọi doanh nghiệp
        </p>

        <div className="flex flex-wrap gap-4 mb-14 justify-center">
          <a
            href="#pricing"
            className="flex items-center gap-2 bg-[#D4A853] hover:bg-[#F0C870] text-black font-bold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer font-[family-name:var(--font-sub)]"
          >
            Xem Bảng Giá
            <ChevronRight size={16} />
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 border border-[#D4A853]/40 hover:border-[#D4A853] text-[#D4A853] font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer font-[family-name:var(--font-sub)]"
          >
            <Play size={16} />
            Xem Portfolio
          </a>
        </div>

        <div className="flex gap-6 sm:gap-12 md:gap-20 justify-center pt-6 border-t border-[#D4A853]/15 max-w-2xl mx-auto">
          {[
            { num: "200+", label: "Video đã dựng" },
            { num: "5+", label: "Năm kinh nghiệm" },
            { num: "98%", label: "Khách hài lòng" },
          ].map((s) => (
            <div key={s.label} className="pt-6 text-center">
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-black text-gold-gradient font-[family-name:var(--font-heading)]"
                style={{ fontVariantNumeric: "lining-nums tabular-nums", lineHeight: 1 }}
              >
                {s.num}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm mt-2 font-[family-name:var(--font-body)] whitespace-nowrap">{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
    </section>
  );
}

// ─── SECTION HEADER HELPER ──────────────────────────────────────────────────
function SectionHeader({
  number,
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={`relative mb-20 ${isCenter ? "text-center" : "text-left"}`}>
      {/* Giant editorial number */}
      <div
        className={`absolute ${isCenter ? "left-1/2 -translate-x-1/2" : "-left-2 lg:-left-4"} -top-12 lg:-top-16 font-[family-name:var(--font-heading)] text-[160px] lg:text-[220px] leading-none text-[#D4A853]/[0.06] font-bold select-none pointer-events-none z-0`}
        aria-hidden="true"
      >
        {number}
      </div>

      <div className="relative z-10">
        <Reveal>
          <div className={`flex items-center gap-3 mb-5 ${isCenter ? "justify-center" : ""}`}>
            <div className="w-10 h-px bg-[#D4A853]" />
            <span className="font-[family-name:var(--font-sub)] text-[#D4A853] text-xs uppercase tracking-[0.3em]">
              {eyebrow}
            </span>
            <div className="w-10 h-px bg-[#D4A853]" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-4 overflow-visible whitespace-nowrap sm:whitespace-normal"
            style={{
              fontWeight: 600,
              lineHeight: 1.3,
              paddingBottom: "0.15em",
            }}
          >
            {title}
          </h2>
        </Reveal>

        {subtitle && (
          <Reveal delay={200}>
            <p className={`font-[family-name:var(--font-body)] text-gray-400 text-base md:text-lg max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}

// ─── TEAM (About) ────────────────────────────────────────────────────────────
type TeamMember = {
  name: string;
  role: string;
  avatar: string;
  scale?: number;
  objectPosition?: string;
  headingLine1: string;
  headingLine2: string;
  tagline: string;
  bio: React.ReactNode;
  stats: { num: string; suffix: string; label: string }[];
};

const team: TeamMember[] = [
  {
    name: "Dương Minh Thơ",
    role: "Founder · CR Studio",
    avatar: "/avatar.png",
    headingLine1: "Nghệ Thuật Kể Chuyện",
    headingLine2: "Bằng Không Gian",
    tagline: "10 Năm Bảo Chứng Chất Lượng Cho Phim Bất Động Sản",
    bio: (
      <>
        Trong thế giới của một Video Editor lão luyện, mỗi công trình kiến trúc không đơn thuần là những khối bê tông vô cảm, mà là một <span className="text-white font-medium">thực thể sống</span> sở hữu những câu chuyện và ngôn ngữ của riêng nó. Trải qua <span className="text-[#D4A853] font-semibold">hơn 10 năm hành trình dấn thân trong ngành hậu kỳ</span>, tôi đã nâng tầm việc cắt dựng phim thành <span className="text-white font-medium italic">"Nghệ thuật kể chuyện không gian"</span>. Một thập kỷ thực chiến giúp tôi thấu hiểu sâu sắc cách điều phối nhịp điệu để tôn vinh những đường nét thiết kế, cách gọt giũa ánh sáng để khơi dậy sự sang trọng và cách dùng ngôn ngữ điện ảnh để lột tả cái hồn của một tổ ấm hay một dự án tầm cỡ. Đối với tôi, dựng phim bất động sản là quá trình kết nối xúc cảm — biến những góc máy thô thành một <span className="text-[#D4A853] font-semibold">trải nghiệm thị giác xa hoa</span>, nơi khách hàng thượng lưu có thể cảm nhận được phong cách sống đẳng cấp ngay từ cái nhìn đầu tiên. Tôi không chỉ tạo ra những thước phim mượt mà, tôi kiến tạo những <span className="text-[#D4A853] font-semibold">tuyệt tác truyền thông</span> giúp nâng tầm giá trị và khẳng định vị thế độc bản cho mọi công trình của bạn.
      </>
    ),
    stats: [
      { num: "10", suffix: "Năm", label: "Kinh nghiệm" },
      { num: "200", suffix: "+", label: "Dự án" },
      { num: "100", suffix: "%", label: "Tận tâm" },
    ],
  },
  {
    name: "Nguyễn Trung Hổ",
    role: "Video Editor · CR Studio",
    avatar: "/team-2.png",
    headingLine1: "Khi Sự Hoàn Hảo",
    headingLine2: "Là Châm Ngôn Sống",
    tagline: "2 Năm Kiến Tạo Tuyệt Tác Thị Giác Cho Phim Bất Động Sản",
    bio: (
      <>
        Với tôi, một video bất động sản thành công không bao giờ có chỗ cho những khung hình nửa vời. Trải qua <span className="text-[#D4A853] font-semibold">2 năm hành trình trong thế giới hậu kỳ</span>, tôi hiểu rằng mỗi milimet góc máy, mỗi điểm chuyển sáng và từng nhịp nhạc được đặt chuẩn xác chính là chìa khóa để nâng tầm giá trị của một công trình. <span className="text-white font-medium italic">"Hoàn hảo chính là châm ngôn của tôi."</span> Sự cầu toàn đó thúc ép tôi phải tỉ mỉ trong từng chi tiết: từ việc gọt giũa những chuyển động mượt mà để tôn vinh nét kiến trúc, đến việc cân chỉnh màu sắc sao cho lột tả được sự sang trọng, đẳng cấp nhất của không gian. Tôi không chỉ dựng phim, tôi kiến tạo những <span className="text-[#D4A853] font-semibold">tuyệt tác thị giác</span> giúp sản phẩm bất động sản của bạn chạm đến trái tim của những khách hàng thượng lưu khó tính nhất.
      </>
    ),
    stats: [
      { num: "2", suffix: "Năm+", label: "Kinh nghiệm" },
      { num: "50", suffix: "+", label: "Dự án" },
      { num: "100", suffix: "%", label: "Tâm huyết" },
    ],
  },
  {
    name: "Lê Hải Long",
    role: "Video Editor · CR Studio",
    avatar: "/team-3.png",
    headingLine1: "Hành Trình Gọt Giũa",
    headingLine2: "Không Gian",
    tagline: "Làm Nhiều · Nói Ít · 2 Năm Hậu Kỳ Bất Động Sản",
    bio: (
      <>
        Trong thế giới của một Video Editor, thước phim thành phẩm chính là lời tuyên ngôn giá trị nhất, không cần đến những lời hoa mỹ. Với hơn <span className="text-[#D4A853] font-semibold">2 năm kinh nghiệm thực chiến</span> trong ngành hậu kỳ, tôi chọn định vị bản thân bằng hành động và hiệu quả công việc với châm ngôn nằm lòng: <span className="text-white font-medium italic">"Làm nhiều – nói ít"</span>. Đối với tôi, mỗi dự án bất động sản là một bài toán về không gian và cảm xúc đòi hỏi sự tập trung tuyệt đối. Thay vì nói về những lý thuyết xa vời, tôi dành trọn năng lượng để tỉ mỉ xử lý từng nhịp cắt, tối ưu hóa các góc máy kiến trúc và cân chỉnh màu sắc sao cho lột tả được trọn vẹn sự sang trọng, tiềm năng của dự án. Tôi tin rằng, sự tận tụy trong bóng tối của bàn dựng sẽ được đền đáp bằng những <span className="text-[#D4A853] font-semibold">thước phim biết nói</span>, giúp nâng tầm giá trị sản phẩm và thuyết phục khách hàng của bạn một cách tuyệt đối.
      </>
    ),
    stats: [
      { num: "2", suffix: "Năm+", label: "Kinh nghiệm" },
      { num: "30", suffix: "+", label: "Dự án" },
      { num: "100", suffix: "%", label: "Tâm huyết" },
    ],
  },
  {
    name: "Dương Gia Bảo",
    role: "Cameraman · CR Studio",
    avatar: "/team-5.png",
    headingLine1: "Tầm Nhìn Qua",
    headingLine2: "Thấu Kính",
    tagline: "Sáng Tạo Ở Từng Thước Phim · 4 Năm Cầm Máy",
    bio: (
      <>
        Một bức ảnh có thể đóng băng một khoảnh khắc, nhưng chỉ có những thước phim chuyển động mới có thể lột tả được trọn vẹn hơi thở và linh hồn của một không gian sống. Trải qua <span className="text-[#D4A853] font-semibold">4 năm lăn lộn trên mọi địa hình</span>, từ những công trình đang định hình cho đến những căn hộ penthouse xa hoa, tôi luôn định vị bản thân là một Cameraman không bao giờ chấp nhận những góc máy lối mòn. Châm ngôn sống và làm việc của tôi rất rõ ràng: <span className="text-white font-medium italic">"Sáng tạo ở từng thước phim."</span> Đối với các dự án bất động sản, tôi không chỉ đơn thuần là bấm máy ghi hình; tôi dùng ánh sáng, những cú panning mượt mà và những góc máy flycam táo bạo để <span className="text-[#D4A853] font-semibold">"điêu khắc"</span> nên chiều sâu của kiến trúc. Bốn năm cầm máy là bốn năm tôi học cách làm chủ ánh nắng mặt trời, bắt trọn từng khoảnh khắc đắt giá nhất của hoàng hôn hay bình minh trên các dự án, biến những khối bê tông khô khan thành một câu chuyện nghệ thuật đầy cảm xúc và khát khao sở hữu.
      </>
    ),
    stats: [
      { num: "4", suffix: "Năm+", label: "Cầm máy" },
      { num: "100", suffix: "+", label: "Dự án" },
      { num: "VTV", suffix: "", label: "Cộng tác viên" },
    ],
  },
  {
    name: "Trần Khánh Duy",
    role: "Designer · CR Studio",
    avatar: "/team-6.png",
    headingLine1: "Bản Lĩnh Đột Phá",
    headingLine2: "Không Gian",
    tagline: "A.I Không Cản Bước Được Tôi · 5 Năm Thiết Kế Đồ Họa",
    bio: (
      <>
        Trong kỷ nguyên số, khi công nghệ thay đổi từng ngày, nhiều người lo ngại về sự thay thế — nhưng với tôi, đó là lúc bản sắc cá nhân lên tiếng mạnh mẽ nhất. Trải qua <span className="text-[#D4A853] font-semibold">5 năm hành trình dấn thân trong ngành thiết kế đồ họa</span>, tôi tự tin khẳng định: <span className="text-white font-medium italic">"A.I không cản bước được tôi."</span> Bởi lẽ, trí tuệ nhân tạo có thể tạo ra hình ảnh bằng thuật toán, nhưng không thể sao chép được tư duy duy mỹ, trải nghiệm thực tế và sự thấu hiểu sâu sắc tâm lý con người. Đối với các dự án bất động sản, thiết kế không chỉ là việc sắp xếp bố cục, mà là nghệ thuật định vị đẳng cấp và khơi gợi khát khao sở hữu một tổ ấm. Suốt nửa thập kỷ qua, tôi đã mài dũa khả năng biến những bản vẽ kỹ thuật khô khan thành những ấn phẩm truyền thông, bộ nhận diện dự án xa hoa và đầy cảm xúc. Tôi không đứng ngoài làn sóng công nghệ, tôi làm chủ nó để tạo nên những <span className="text-[#D4A853] font-semibold">tuyệt tác thiết kế độc bản</span>, nâng tầm giá trị cho mọi công trình của bạn.
      </>
    ),
    stats: [
      { num: "5", suffix: "Năm+", label: "Kinh nghiệm" },
      { num: "100", suffix: "+", label: "Sản phẩm" },
      { num: "★", suffix: "", label: "Hợp tác ca sĩ · rapper" },
    ],
  },
];

function About() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = team.length;
  const member = team[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [total]);

  // Auto-advance – resets countdown on every index change or pause toggle
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, total, index]);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-32 px-6 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Soft gold ambient glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#D4A853]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#D4A853]/[0.03] blur-[120px] pointer-events-none" />


      <div className="max-w-7xl mx-auto relative">
        {/* Top row: section eyebrow + nav controls */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-[#D4A853]" />
            <span className="font-[family-name:var(--font-sub)] text-[#D4A853] text-xs uppercase tracking-[0.3em]">
              Về Chúng Tôi
            </span>
          </div>

          {/* Arrow controls + counter */}
          <div className="flex items-center gap-4">
            <span className="font-[family-name:var(--font-heading)] text-gray-400 text-sm tabular-nums">
              <span className="text-[#D4A853] font-bold">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-gray-600">/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </span>
            <button
              onClick={prev}
              disabled={total <= 1}
              aria-label="Thành viên trước"
              className="w-11 h-11 rounded-full border border-[#D4A853]/30 hover:border-[#D4A853] hover:bg-[#D4A853]/10 text-[#D4A853] flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>
            <button
              onClick={next}
              disabled={total <= 1}
              aria-label="Thành viên kế tiếp"
              className="w-11 h-11 rounded-full border border-[#D4A853]/30 hover:border-[#D4A853] hover:bg-[#D4A853]/10 text-[#D4A853] flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div
          key={index}
          className="grid lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-center"
          style={{ animation: "fadeSwap 600ms cubic-bezier(0.16, 1, 0.3, 1)" }}
        >

          {/* LEFT – Avatar with editorial frame */}
          <div className="relative">
            {/* Decorative number */}
            <div className="absolute -top-6 -left-2 lg:-left-6 font-[family-name:var(--font-heading)] text-[120px] lg:text-[180px] leading-none text-[#D4A853]/[0.08] font-bold select-none pointer-events-none z-0">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="relative z-10">
              <div className="relative aspect-[3/4] max-w-md mx-auto">
                {/* Gold corner accents */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#D4A853]/60" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#D4A853]/60" />

                <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
                  <img
                    src={member.avatar}
                    alt={`${member.name} – ${member.role}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      objectPosition: member.objectPosition ?? "center top",
                      transform: member.scale ? `scale(${member.scale})` : undefined,
                      transformOrigin: "center top",
                      filter: "drop-shadow(0 20px 60px rgba(212,168,83,0.15))",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>

                {/* Name plate */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-[#D4A853]/25 px-6 py-3 whitespace-nowrap">
                  <p className="font-[family-name:var(--font-heading)] text-white text-lg font-bold tracking-wide text-center">
                    {member.name}
                  </p>
                  <p className="font-[family-name:var(--font-sub)] text-[#D4A853] text-[10px] uppercase tracking-[0.25em] text-center mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – Editorial text */}
          <div className="relative">
            <h2
              id="about-heading"
              className="font-[family-name:var(--font-heading)] text-white mb-3 whitespace-nowrap overflow-visible"
              style={{
                fontSize: "clamp(1.4rem, 4.5vw, 2.75rem)",
                fontWeight: 600,
                lineHeight: 1.25,
                paddingBottom: "0.1em",
              }}
            >
              {member.headingLine1}
              <br />
              <span className="text-gold-gradient">{member.headingLine2}</span>
            </h2>

            <p className="font-[family-name:var(--font-sub)] text-white/70 uppercase font-medium whitespace-nowrap mb-8"
               style={{
                 fontSize: "clamp(8.5px, 2.4vw, 14px)",
                 letterSpacing: "clamp(0.02em, 0.4vw, 0.15em)",
               }}>
              {member.tagline}
            </p>

            <div className="w-16 h-px bg-gradient-to-r from-[#D4A853] to-transparent mb-8" />

            <p className="font-[family-name:var(--font-body)] text-gray-300 text-base md:text-lg leading-[1.85] mb-10 max-w-2xl">
              {member.bio}
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-xl pt-8 border-t border-[#D4A853]/15">
              {member.stats.map((s) => (
                <div key={s.label}>
                  <div className="flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-gold-gradient font-bold">{s.num}</span>
                    <span className="font-[family-name:var(--font-heading)] text-lg text-[#D4A853]">{s.suffix}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-[family-name:var(--font-sub)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dot indicators */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Chuyển đến thành viên ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  i === index ? "w-10 bg-[#D4A853]/30" : "w-1.5 bg-[#D4A853]/30 hover:bg-[#D4A853]/60"
                }`}
              >
                {i === index && !isPaused && (
                  <span
                    key={index}
                    className="absolute inset-y-0 left-0 bg-[#D4A853] rounded-full"
                    style={{ animation: "dotProgress 7s linear forwards" }}
                  />
                )}
                {i === index && isPaused && (
                  <span className="absolute inset-y-0 left-0 right-0 bg-[#D4A853] rounded-full" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeSwap {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Film,
    title: "Dựng Video Chuyên Nghiệp",
    desc: "Cắt dựng từ footage khách hàng cung cấp theo nhịp phim, kịch bản storytelling và phong cách phù hợp từng loại bất động sản.",
  },
  {
    icon: Palette,
    title: "Color Grading Cinematic",
    desc: "Chỉnh màu nâng cao từ cơ bản đến cinematic – tạo cảm xúc, tăng giá trị thị giác cho từng dự án.",
  },
  {
    icon: Layers,
    title: "Motion Graphics & Effects",
    desc: "Text animation, hiệu ứng chuyển cảnh chuyên nghiệp, chèn icon, callout, bảng tiện ích, map animation.",
  },
  {
    icon: Music,
    title: "Nhạc Nền Bản Quyền",
    desc: "Kho nhạc có bản quyền phong phú, lựa chọn nhạc phù hợp tâm trạng và thông điệp từng dự án.",
  },
  {
    icon: Video,
    title: "Xuất Đa Định Dạng",
    desc: "Xuất 16:9 (ngang), 9:16 (dọc), teaser 15–30s – tối ưu cho mọi nền tảng: YouTube, Facebook, TikTok, Ads.",
  },
  {
    icon: Eye,
    title: "Tư Vấn & Chiến Lược",
    desc: "Tư vấn phong cách dựng phù hợp mục tiêu truyền thông – từ video đăng mạng đến chạy quảng cáo.",
  },
];

function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          eyebrow="Dịch Vụ"
          title={<>Chúng Tôi Có Thể <span className="text-gold-gradient">Hỗ Trợ</span> Bạn</>}
          subtitle="Từ video ngắn đăng mạng xã hội đến video dự án chuyên nghiệp với hiệu ứng nâng cao"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-card rounded-2xl p-7 hover:border-[#D4A853]/40 transition-all duration-300 cursor-default group h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4A853]/20 transition-colors duration-300">
                    <s.icon size={22} className="text-[#D4A853]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-sub)] text-white font-bold text-lg leading-tight">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-body)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
type PortfolioItem = {
  title: string;
  youtubeId: string;
  isShort: boolean;
  thumb: string;
};

const portfolioItems: PortfolioItem[] = [
  { title: "Bên Trong Penthouse 170 Tỷ – Dinh Thự Trên Không The Opera Thủ Thiêm",  youtubeId: "5CEuUzsYEzQ", isShort: false, thumb: "https://i.ytimg.com/vi/5CEuUzsYEzQ/maxresdefault.jpg" },
  { title: "Chạm Tay Vào Giấc Mơ Thượng Lưu Tại Loft House – Opera Thủ Thiêm",     youtubeId: "fsb9ifLCUDw", isShort: false, thumb: "https://i.ytimg.com/vi/fsb9ifLCUDw/maxresdefault.jpg" },
  { title: "The Crest Residence – Picturesque Beauty Of Thủ Thiêm",                youtubeId: "UCFzNSiJdys", isShort: false, thumb: "https://i.ytimg.com/vi/UCFzNSiJdys/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "LWnsh9UYxao", isShort: false, thumb: "https://i.ytimg.com/vi/LWnsh9UYxao/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "oLxr131HL6I", isShort: false, thumb: "https://i.ytimg.com/vi/oLxr131HL6I/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "h8swSeCIKtw", isShort: false, thumb: "https://i.ytimg.com/vi/h8swSeCIKtw/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "27NjDWufuE4", isShort: false, thumb: "https://i.ytimg.com/vi/27NjDWufuE4/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "oAhO2ZYs4XA", isShort: false, thumb: "https://i.ytimg.com/vi/oAhO2ZYs4XA/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "xdU4i6HQ5Wc", isShort: false, thumb: "https://i.ytimg.com/vi/xdU4i6HQ5Wc/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "d0vcAkPFH3Q", isShort: false, thumb: "https://i.ytimg.com/vi/d0vcAkPFH3Q/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "Dk7pJISdXtg", isShort: false, thumb: "https://i.ytimg.com/vi/Dk7pJISdXtg/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "IttmSAdv5KI", isShort: false, thumb: "https://i.ytimg.com/vi/IttmSAdv5KI/maxresdefault.jpg" },
  { title: "Video BĐS",  youtubeId: "oJQSLny8IVI", isShort: false, thumb: "https://i.ytimg.com/vi/oJQSLny8IVI/maxresdefault.jpg" },
];

function PortfolioCard({
  item,
  onOpen,
}: {
  item: PortfolioItem;
  onOpen: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Phát video: ${item.title}`}
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-[#D4A853]/50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853]"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <img
          src={item.thumb}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30 group-hover:from-black/50 transition-all duration-300 pointer-events-none" />

        {/* Play button – grows + gold fill on hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#D4A853]/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4A853] group-hover:border-[#D4A853]">
            <Play size={22} className="text-[#D4A853] ml-1 transition-colors duration-300 group-hover:text-black" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.04)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          number="03"
          eyebrow="Portfolio"
          title={<>Một Số Dự Án <span className="text-gold-gradient">Bất Động Sản</span></>}
          subtitle="Các dự án bất động sản chúng tôi đã thực hiện. Bạn có thể xem và tham khảo trước khi yêu cầu chúng tôi."
        />
        {portfolioItems.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <PortfolioCard item={item} onOpen={() => setActiveVideo(item)} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="glass-card rounded-2xl py-20 px-8 text-center">
              <p className="font-[family-name:var(--font-heading)] text-white/80 text-2xl md:text-3xl mb-3">
                Đang cập nhật sản phẩm mới
              </p>
              <p className="text-gray-400 text-base font-[family-name:var(--font-body)] max-w-md mx-auto">
                Liên hệ trực tiếp để xem các dự án đã thực hiện gần đây
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 bg-[#D4A853] hover:bg-[#F0C870] text-black font-bold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer font-[family-name:var(--font-sub)]"
              >
                <Phone size={14} />
                Liên Hệ Xem Portfolio
              </a>
            </div>
          </Reveal>
        )}
      </div>

      {/* Single modal – switching to a new video auto-closes the old one */}
      <VideoModal
        key={activeVideo?.youtubeId}
        youtubeId={activeVideo?.youtubeId ?? ""}
        isShort={activeVideo?.isShort ?? false}
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────
const steps = [
  { num: "01", icon: MessageSquare, title: "Tiếp Nhận", desc: "Nhận yêu cầu & footage từ khách hàng. Trao đổi về phong cách, mục tiêu video." },
  { num: "02", icon: Eye, title: "Tư Vấn", desc: "Tư vấn báo giá chi tiết & thống nhất kịch bản, phong cách, thời lượng video." },
  { num: "03", icon: Shield, title: "Thanh Toán Cọc", desc: "Đặt cọc 50% để xác nhận hợp tác và bắt đầu sản xuất." },
  { num: "04", icon: Film, title: "Thực Hiện", desc: "Dựng video theo yêu cầu, áp dụng hiệu ứng và color grading phù hợp." },
  { num: "05", icon: CheckCircle2, title: "Gửi Duyệt", desc: "Gửi bản nháp để khách hàng xem xét và phản hồi chỉnh sửa." },
  { num: "06", icon: Award, title: "Bàn Giao", desc: "Bàn giao file hoàn chỉnh & thanh toán 50% còn lại." },
];

function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          eyebrow="Quy Trình"
          title={<>Quy Trình <span className="text-gold-gradient">Làm Việc</span></>}
          subtitle="Minh bạch · Chuyên nghiệp · Đúng tiến độ"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="relative glass-card rounded-2xl p-7 hover:border-[#D4A853]/40 transition-all duration-300 h-full">
                <div className="absolute top-5 right-5 number-badge rounded-lg px-2.5 py-1">
                  <span className="text-[#D4A853] font-black text-sm">{step.num}</span>
                </div>
                <div className="flex items-center gap-4 mb-4 pr-14">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                    <step.icon size={22} className="text-[#D4A853]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-sub)] text-white font-bold text-lg leading-tight">{step.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-body)]">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING ──────────────────────────────────────────────────────────────────
const plans = [
  {
    name: "Gói Cơ Bản",
    sub: "Video Ngắn – Đăng Mạng Xã Hội",
    price: "Liên hệ để làm việc",
    unit: "",
    highlight: false,
    features: [
      "Dựng từ footage khách hàng cung cấp",
      "Thời lượng 30 – 60 giây",
      "Cắt dựng theo nhịp, thêm nhạc nền",
      "Chèn chữ, logo, thông tin dự án",
      "Chỉnh màu cơ bản",
      "Xuất 01 phiên bản (ngang HOẶC dọc)",
      "Số lần sửa: 02 lần",
    ],
  },
  {
    name: "Gói Chuyên Nghiệp",
    sub: "Video Bán Hàng – Chạy ADS",
    price: "Liên hệ để làm việc",
    unit: "",
    highlight: true,
    features: [
      "Dựng từ footage khách hàng cung cấp",
      "Thời lượng 60 – 120 giây",
      "Cắt dựng theo kịch bản, storytelling",
      "Chèn chữ động (text animation)",
      "Chỉnh màu nâng cao",
      "Hiệu ứng chuyển cảnh chuyên nghiệp",
      "Chèn logo, thông tin, hotline, tiện ích",
      "Nhạc nền có bản quyền",
      "Xuất 02 phiên bản: 16:9 và 9:16",
      "Số lần sửa: 02 lần",
    ],
  },
  {
    name: "Gói Cao Cấp",
    sub: "Video Dự Án – Hiệu Ứng Nâng Cao",
    price: "Liên hệ để làm việc",
    unit: "",
    highlight: false,
    features: [
      "Dựng từ footage khách hàng cung cấp",
      "Thời lượng 120 – 180 giây",
      "Kịch bản chi tiết, storytelling",
      "Hiệu ứng nâng cao, motion graphics",
      "Chèn icon, callout, bảng tiện ích",
      "Map animation / Geolayers cơ bản",
      "Chỉnh màu cinematic",
      "Nhạc nền bản quyền cao cấp",
      "Xuất 03 phiên bản: 16:9, 9:16, teaser 15–30s",
      "Số lần sửa: 03 lần",
    ],
  },
];

const addons = [
  { name: "Viết kịch bản / Lên ý tưởng", price: "800.000 – 2.000.000đ" },
  { name: "Thu âm voice off", price: "500.000 – 1.500.000đ" },
  { name: "Motion map / Geolayers nâng cao", price: "2.000.000 – 5.000.000đ" },
  { name: "Hiệu ứng 3D / Phối cảnh 3D", price: "Báo giá theo yêu cầu" },
  { name: "Chèn phụ đề / Text animation nâng cao", price: "500.000 – 1.000.000đ" },
  { name: "Chèn logo, intro/outro riêng", price: "300.000 – 800.000đ" },
  { name: "Cắt thêm video ngắn (15–30s)", price: "300.000 – 800.000đ/video" },
  { name: "Sửa thêm ngoài số lần quy định", price: "300.000 – 700.000đ/lần" },
];

function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,83,0.05)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          number="05"
          eyebrow="Bảng Giá"
          title={<>Chi Phí <span className="text-gold-gradient">Dịch Vụ</span></>}
          subtitle="Giá minh bạch, rõ ràng – chưa bao gồm VAT (nếu xuất hóa đơn)"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#D4A853]/15 to-[#D4A853]/5 border-2 border-[#D4A853] gold-glow"
                  : "glass-card hover:border-[#D4A853]/40"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4A853] text-black text-xs font-black px-5 py-1.5 rounded-full tracking-wider whitespace-nowrap">
                  PHỔ BIẾN NHẤT
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-black text-xl mb-1 ${plan.highlight ? "text-[#D4A853]" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{plan.sub}</p>
              </div>
              <div className="mb-6">
                <span className={`text-2xl font-black ${plan.highlight ? "text-[#D4A853]" : "text-white"}`}>
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm ml-1">{plan.unit}</span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#D4A853]" : "text-[#D4A853]/70"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 font-semibold py-3 rounded-full transition-all duration-200 cursor-pointer text-sm ${
                  plan.highlight
                    ? "bg-[#D4A853] hover:bg-[#F0C870] text-black"
                    : "border border-[#D4A853]/40 hover:border-[#D4A853] text-[#D4A853]"
                }`}
              >
                Chọn Gói Này
                <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 mb-6">
          <h3 className="text-[#D4A853] font-bold text-lg mb-1">Phụ Phí Dựng Nâng Cao</h3>
          <p className="text-gray-500 text-sm mb-6">(Tùy chọn thêm vào bất kỳ gói nào)</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map((a, i) => (
              <div key={i} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                <p className="text-white text-sm font-medium mb-1.5">{a.name}</p>
                <p className="text-[#D4A853] text-sm font-bold">{a.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl px-6 py-4">
          <p className="text-[#D4A853] text-sm font-semibold mb-2">Ghi Chú</p>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>• Footage khách hàng cung cấp phải đảm bảo chất lượng (độ nét tối thiểu Full HD)</li>
            <li>• Giá trên chưa bao gồm VAT (nếu xuất hóa đơn)</li>
            <li>• Thời gian thực hiện: 2 – 4 ngày làm việc tùy độ phức tạp</li>
            <li>• Không bao gồm chi phí quay, flycam, di chuyển</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── COMMITMENT ───────────────────────────────────────────────────────────────
const commitments = [
  {
    icon: Award,
    title: "Video Chắc Chắn Thu Hút",
    desc: "Mỗi video được dựng với sự chú trọng vào nhịp điệu, cảm xúc và thông điệp – đảm bảo giữ chân người xem đến cuối.",
  },
  {
    icon: MapPin,
    title: "Truyền Tải Đúng Giá Trị BĐS",
    desc: "Hiểu sâu thị trường bất động sản – biết cách làm nổi bật điểm mạnh của từng dự án qua hình ảnh và câu chuyện.",
  },
  {
    icon: Zap,
    title: "Tối Ưu Hiệu Quả Quảng Cáo",
    desc: "Video được tối ưu cho từng nền tảng (Facebook Ads, YouTube, TikTok) – giúp giảm chi phí quảng cáo, tăng tỷ lệ chuyển đổi.",
  },
  {
    icon: Users,
    title: "Đồng Hành Dài Lâu",
    desc: "Tư vấn phong cách dựng phù hợp mục tiêu truyền thông – chúng tôi luôn sẵn sàng hỗ trợ khách hàng trước, trong và sau khi giao sản phẩm.",
  },
];

function Commitment() {
  return (
    <section id="commitment" aria-labelledby="commitment-heading" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />
        <SectionHeader
          number="06"
          eyebrow="Cam Kết"
          title={<>Cam Kết Từ <span className="text-gold-gradient">CR Studio</span></>}
          subtitle="Không chỉ là nhà cung cấp dịch vụ – chúng tôi là đối tác truyền thông của bạn"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {commitments.map((c, i) => (
            <div key={i} className="glass-card rounded-2xl p-7 flex gap-5 hover:border-[#D4A853]/40 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                <c.icon size={24} className="text-[#D4A853]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,83,0.06)_0%,transparent_60%)]" />
      <div className="max-w-5xl mx-auto relative">
        <SectionHeader
          number="07"
          eyebrow="Liên Hệ"
          title={<>Liên Hệ <span className="text-gold-gradient">Ngay</span></>}
          subtitle="Sẵn sàng hỗ trợ bạn – phản hồi trong vòng 2 giờ"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a
              href="tel:0945657611"
              className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#D4A853]/50 transition-all duration-300 cursor-pointer group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/15 flex items-center justify-center group-hover:bg-[#D4A853]/25 transition-colors">
                <Phone size={22} className="text-[#D4A853]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Điện Thoại / Zalo</p>
                <p className="text-white font-bold text-xl">0945 657 611</p>
              </div>
            </a>

            <a
              href="mailto:Editornghiepdu93@gmail.com"
              className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#D4A853]/50 transition-all duration-300 cursor-pointer group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/15 flex items-center justify-center group-hover:bg-[#D4A853]/25 transition-colors">
                <Mail size={22} className="text-[#D4A853]" />
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                <p className="text-white font-bold text-xl">Editornghiepdu93@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/tho.duongminh.hanhtinhxanh"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#D4A853]/50 transition-all duration-300 cursor-pointer group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/15 flex items-center justify-center group-hover:bg-[#D4A853]/25 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#D4A853]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Facebook</p>
                <p className="text-white font-bold">Nhắn Tin Qua Facebook</p>
              </div>
              <ArrowRight size={16} className="text-[#D4A853] group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock size={16} className="text-[#D4A853]" />
                Hỗ trợ hàng ngày: <span className="text-white font-medium">8:00 – 21:00</span>
              </div>
            </div>
          </div>

          {/* QR Zalo */}
          <div className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <p className="text-[#D4A853] text-sm uppercase tracking-wider font-medium mb-5">Quét Mã Zalo / Chat Ngay</p>

            <div className="w-52 h-52 bg-white rounded-2xl p-3 mb-5 flex items-center justify-center">
              <img
                src="/qr-zalo.jpg"
                alt="Mã QR Zalo CR Studio – 0945 657 611"
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
              />
            </div>

            <p className="text-white font-bold text-lg mb-1">Zalo CR Studio</p>
            <p className="text-gray-400 text-sm mb-4">Quét để nhắn tin ngay qua Zalo</p>
            <div className="flex items-center gap-2 bg-[#D4A853]/10 border border-[#D4A853]/30 rounded-full px-5 py-2">
              <Phone size={14} className="text-[#D4A853]" />
              <span className="text-[#D4A853] font-bold">0945 657 611</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const navLinks = [
    { label: "Về Chúng Tôi", href: "#about" },
    { label: "Dịch Vụ", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Quy Trình", href: "#process" },
    { label: "Bảng Giá", href: "#pricing" },
    { label: "Liên Hệ", href: "#contact" },
  ];

  const services = [
    "Map Animation",
    "Color Grading",
    "Motion Graphics",
    "Video Cinematic",
    "Voice Over",
    "Storytelling",
  ];

  return (
    <footer role="contentinfo" className="border-t border-[#D4A853]/10 bg-[#050505]">
      {/* Top CTA strip */}
      <div className="border-b border-[#D4A853]/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white italic mb-1">
              Sẵn sàng nâng tầm video của bạn?
            </h3>
            <p className="text-gray-400 text-sm font-[family-name:var(--font-body)]">
              Liên hệ tư vấn miễn phí – phản hồi trong 2 giờ
            </p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#D4A853] hover:bg-[#F0C870] text-black font-bold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer font-[family-name:var(--font-sub)] whitespace-nowrap"
          >
            <Phone size={14} />
            Liên Hệ Ngay
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src="/logo.png" alt="CR Studio logo" className="h-12 w-auto mb-5" />
          <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-body)] mb-5">
            Chuyên dựng video bất động sản cinematic. 10 năm kinh nghiệm cùng hơn 200 dự án đã hoàn thành.
          </p>
          <p className="font-[family-name:var(--font-sub)] text-[#D4A853] text-xs uppercase tracking-[0.25em]">
            Chuyên Nghiệp · Ấn Tượng · Hiệu Quả
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-[family-name:var(--font-sub)] text-white font-bold text-sm uppercase tracking-wider mb-5">
            Điều Hướng
          </h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors cursor-pointer font-[family-name:var(--font-body)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-[family-name:var(--font-sub)] text-white font-bold text-sm uppercase tracking-wider mb-5">
            Dịch Vụ
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s} className="text-gray-400 text-sm font-[family-name:var(--font-body)]">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-[family-name:var(--font-sub)] text-white font-bold text-sm uppercase tracking-wider mb-5">
            Liên Hệ
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:0945657611" className="text-gray-400 hover:text-[#D4A853] transition-colors cursor-pointer flex items-center gap-2 font-[family-name:var(--font-body)]">
                <Phone size={14} className="text-[#D4A853] shrink-0" />
                0945 657 611
              </a>
            </li>
            <li>
              <a href="mailto:Editornghiepdu93@gmail.com" className="text-gray-400 hover:text-[#D4A853] transition-colors cursor-pointer flex items-center gap-2 font-[family-name:var(--font-body)]">
                <Mail size={14} className="text-[#D4A853] shrink-0" />
                Editornghiepdu93@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tho.duongminh.hanhtinhxanh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4A853] transition-colors cursor-pointer flex items-center gap-2 font-[family-name:var(--font-body)]"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#D4A853] shrink-0">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </li>
            <li className="text-gray-400 flex items-center gap-2 font-[family-name:var(--font-body)]">
              <Clock size={14} className="text-[#D4A853] shrink-0" />
              8:00 – 21:00 hàng ngày
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D4A853]/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-[family-name:var(--font-body)]">
            © 2025 <span className="text-[#D4A853]">CR Studio</span> · All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-[family-name:var(--font-body)]">
            Designed with passion · Dương Minh Thơ
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <GlobalMouseGlow size={300} opacity={0.22} />
      <Navbar />
      <main className="min-h-screen bg-[#080808]">
        <Hero />
        <About />
        <Marquee />
        <Services />
        <div className="section-divider mx-6" role="separator" />
        <Portfolio />
        <Marquee speed={50} items={["Map Animation", "Real Estate", "Cinematic Video", "Storytelling", "Premium Quality"]} />
        <Process />
        <div className="section-divider mx-6" role="separator" />
        <Pricing />
        <Commitment />
        <div className="section-divider mx-6" role="separator" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
