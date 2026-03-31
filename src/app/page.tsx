"use client";

import { useState, useEffect } from "react";
import developers from "../../Developer/developers.json";

const TypingEffect = ({
  text,
  speed = 150,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="font-mono text-green-400">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const CodeBlock = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`bg-gray-900 rounded-lg p-4 font-mono text-sm ${className}`}>
    {children}
  </div>
);

export default function Home() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const commands = [
    "npm install dekcommorkhor",
    "git clone https://github.com/jrKitt/comscikku",
    "python generate_ideas.py --mode=creative",
    "node server.js --port=3000 --env=development",
    "docker run -p 8080:80 comscikku/webapp:latest",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [commands.length]);

  return (
    <div className="min-h-screen text-[color:var(--foreground)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14">
        <div className="soft-card bg-[color:var(--surface-soft)] px-4 py-3 text-sm text-[color:var(--text-muted)]">
          Home / Communities
        </div>

        <div className="soft-card mt-6 bg-[color:var(--surface)] p-6 sm:p-10 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 w-fit mx-auto">
            <div className="w-2 h-2 bg-[color:var(--brand)] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[color:var(--brand-deep)]">
                  กำลังออนไลน์
            </span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-[color:var(--foreground)]">
            ชุมชนนักพัฒนา
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-[color:var(--text-muted)] leading-relaxed">
            เข้าร่วมชุมชนนักพัฒนาที่กำลังเติบโตของเรา เพื่อเชื่อมต่อกับเพื่อนโปรแกรมเมอร์
            แบ่งปันความรู้ ร่วมมือในโปรเจกต์ต่างๆ และเติบโตไปด้วยกัน
          </p>
        </div>

        <div className="soft-card mt-6 bg-[color:var(--surface)] p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
            <input
              type="text"
              placeholder="Search communities or topics"
              className="w-full rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--surface-soft)] px-4 py-3 text-[color:var(--foreground)] placeholder:text-[color:var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]"
            />
            <button className="rounded-xl bg-[color:var(--brand)] hover:bg-[color:var(--brand-deep)] px-7 py-3 font-medium text-white transition-colors">
              Search Communities
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Developer Hub KKU</h2>
            <p className="text-[color:var(--text-muted)] leading-relaxed">
              พื้นที่รวมตัวของนักพัฒนา นักออกแบบ และผู้สนใจเทคโนโลยี
              จากทุกคณะในมหาวิทยาลัยขอนแก่น
            </p>
            <div className="soft-card p-5">
              <div className="text-sm text-[color:var(--text-muted)]">สมาชิกทั้งหมด</div>
              <div className="text-4xl font-bold mt-2 text-[color:var(--brand-deep)]">
                {developers.length}+
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-[color:var(--brand)] hover:bg-[color:var(--brand-deep)] rounded-lg font-medium transition-colors text-white">
                เข้าร่วมกับเรา
              </button>
              <button className="px-6 py-3 bg-white hover:bg-[color:var(--surface-soft)] rounded-lg font-medium border border-[color:var(--border-soft)] transition-colors text-[color:var(--foreground)]">
                ดูกิจกรรม
              </button>
            </div>
          </div>

          <div className="soft-card p-5 overflow-x-auto">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[color:var(--border-soft)]">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-[color:var(--text-muted)] text-xs ml-2">terminal</span>
            </div>
            <div className="space-y-2">
              <div className="text-[color:var(--foreground)] text-xs sm:text-base break-all font-mono">
                <span className="text-[color:var(--brand-deep)]">user@devkku</span>
                <span>:</span>
                <span className="text-cyan-700">~/community</span>
                <span>$ </span>
                <TypingEffect text={commands[currentCommand]} speed={100} />
              </div>
              <div className="text-[color:var(--text-muted)] text-xs">
                ระบบกำลังจับคู่สมาชิกกับทีมโปรเจกต์...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
