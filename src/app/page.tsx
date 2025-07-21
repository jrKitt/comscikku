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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 w-fit mx-auto lg:mx-0">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-200">
                  กำลังออนไลน์
                </span>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                  Dev Community KKU
                </h1>
                <p className="text-lg sm:text-xl text-blue-100 mb-6">
                  ชุมชนนักพัฒนา | มหาวิทยาลัยขอนแก่น
                </p>
                <div className="prose prose-invert max-w-none mx-auto lg:mx-0">
                  <p className="text-blue-200 leading-relaxed">
                    พื้นที่รวมตัวของนักพัฒนา นักออกแบบ
                    และผู้สนใจเทคโนโลยีจากทุกคณะใน มข. <br />
                    แลกเปลี่ยนความรู้ แชร์โปรเจกต์ สร้างเครือข่าย
                    และผลักดันวงการ IT ในรั้วมหาวิทยาลัย
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto lg:mx-0">
                <div className="bg-blue-900/60 rounded-lg p-4 border border-blue-800 text-center">
                    <div className="text-2xl font-bold text-blue-300">
                    {(() => {
                        
                        return `${developers.length}+`;
                    })()}
                    </div>
                  <div className="text-sm text-blue-100">สมาชิกทั้งหมด</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-white w-full sm:w-auto">
                  เข้าร่วมกับเรา
                </button>
                <button className="px-6 py-3 bg-black hover:bg-blue-900 rounded-lg font-medium border border-blue-700 transition-colors text-blue-100 w-full sm:w-auto">
                  ดูกิจกรรม
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-6 mt-10 lg:mt-0">
            <CodeBlock className="border border-blue-800 overflow-x-auto">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-blue-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-blue-200 text-xs ml-2">terminal</span>
              </div>
              <div className="space-y-2">
                <div className="text-cyan-300 text-xs sm:text-base break-all">
                  <span className="text-blue-400">user@devkku</span>
                  <span className="text-white">:</span>
                  <span className="text-cyan-400">~/community</span>
                  <span className="text-white">$ </span>
                  <TypingEffect text={commands[currentCommand]} speed={100} />
                </div>
                <div className="text-blue-200 text-xs">
                  ✓ กำลังเริ่มต้นการเรียนรู้และพัฒนาร่วมกัน...
                </div>
              </div>
            </CodeBlock>
            <CodeBlock className="border border-blue-800 overflow-x-auto">
              <div className="text-blue-200 text-xs mb-2">{`// คลาสหลักของชุมชน Dev KKU`}</div>
              <div className="space-y-1 text-xs sm:text-sm">
                <div>
                  <span className="text-blue-400">class</span>{" "}
                  <span className="text-cyan-300">DevCommunityKKU</span>{" "}
                  <span className="text-white">{"{"}</span>
                </div>
                <div className="pl-4">
                  <div>
                    <span className="text-cyan-400">constructor</span>
                    <span className="text-white">(</span>
                    <span className="text-blue-200">vision</span>
                    <span className="text-white">) {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <div>
                      <span className="text-blue-400">this</span>
                      <span className="text-white">.mission = </span>
                      <span className="text-cyan-300">
                        &quot;สร้างพื้นที่แห่งการเรียนรู้และพัฒนา&quot;
                      </span>
                      <span className="text-white">;</span>
                    </div>
                    <div>
                      <span className="text-blue-400">this</span>
                      <span className="text-white">.values = [</span>
                      <span className="text-cyan-300">
                        &quot;Open Source&quot;
                      </span>
                      <span className="text-white">, </span>
                      <span className="text-cyan-300">
                        &quot;Collaboration&quot;
                      </span>
                      <span className="text-white">, </span>
                      <span className="text-cyan-300">
                        &quot;Creativity&quot;
                      </span>
                      <span className="text-white">];</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-white">{"}"}</span>
                  </div>
                </div>
                <div className="pl-4">
                  <div>
                    <span className="text-cyan-400">async</span>{" "}
                    <span className="text-blue-200">buildFuture</span>
                    <span className="text-white">() {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <div>
                      <span className="text-blue-400">return</span>{" "}
                      <span className="text-cyan-400">await</span>{" "}
                      <span className="text-blue-400">this</span>
                      <span className="text-white">.members.map(</span>
                      <span className="text-blue-200">m</span>{" "}
                      <span className="text-white">{" => "} m.learn());</span>
                    </div>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">{"}"}</span>
                  </div>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>
                </div>
              </div>
            </CodeBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
