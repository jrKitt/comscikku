'use client';

import { useState } from "react";
import Image from "next/image";
import developersData from "../../../Developer/developers.json";

type Developer = {
  id: number;
  name: string;
  username: string;
  title: string;
  bio: string;
  avatar: string;
  skills: string[];
  links: {
    github?: string;
    website?: string;
    linkedin?: string;
    medium?: string;
    [key: string]: string | undefined;
  };
};

const developers: Developer[] = developersData as Developer[];

const skillColors: Record<string, string> = {
  "React": "bg-blue-500",
  "TypeScript": "bg-blue-600",
  "Node.js": "bg-green-600",
  "Python": "bg-yellow-500",
  "Docker": "bg-blue-400",
  "Vue.js": "bg-green-500",
  "CSS": "bg-pink-500",
  "Figma": "bg-purple-500",
  "JavaScript": "bg-yellow-400",
  "Django": "bg-green-700",
  "PostgreSQL": "bg-blue-700",
  "AWS": "bg-orange-500",
  "Kubernetes": "bg-blue-800",
  "Terraform": "bg-purple-600",
  "Jenkins": "bg-red-600",
  "Monitoring": "bg-gray-600",
  "R": "bg-blue-300",
  "TensorFlow": "bg-orange-600",
  "Pandas": "bg-green-400",
  "Tableau": "bg-blue-400",
  "React Native": "bg-cyan-500",
  "Flutter": "bg-blue-500",
  "Swift": "bg-orange-400",
  "Kotlin": "bg-purple-700",
  "Firebase": "bg-yellow-600"
};

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");

  const filteredDevelopers = developers.filter(dev => {
    const matchesSearch = dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dev.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dev.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = selectedSkill === "" || dev.skills.includes(selectedSkill);
    return matchesSearch && matchesSkill;
  });

  const allSkills = [...new Set(developers.flatMap(dev => dev.skills))].sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-800 text-white">
      <div className="pt-20 px-6 py-12">
        <div className="container mx-auto">
          <div className="mt-6 mb-8 flex flex-col lg:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1">
              <input
                type="text"
                placeholder="ค้นหา"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-blue-900/60 border border-blue-800 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="lg:w-64">
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="w-full px-4 py-3 bg-blue-900/60 border border-blue-800 rounded-lg text-white focus:outline-none focus:border-blue-600"
              >
                <option value="">ทุกสกิล</option>
                {allSkills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDevelopers.map(dev => (
              <div key={dev.id} className="bg-blue-900/60 backdrop-blur-lg border border-blue-800/50 rounded-xl p-6 hover:bg-blue-900/80 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={dev.avatar}
                    alt={dev.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-2 border-blue-400"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{dev.name}</h3>
                    <p className="text-blue-300">{dev.username}</p>
                    <p className="text-sm text-cyan-300">{dev.title}</p>
                  </div>
                </div>

                <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                  {dev.bio}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-medium text-blue-100 mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {dev.skills.map(skill => (
                      <span
                        key={skill}
                        className={`px-2 py-1 text-xs rounded-full text-white font-medium ${skillColors[skill] || 'bg-gray-600'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-blue-800">
                  {dev.links.github && (
                    <a
                      href={dev.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                      title="GitHub"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {dev.links.website && (
                    <a
                      href={dev.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                      title="Website"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </a>
                  )}
                  {dev.links.linkedin && (
                    <a
                      href={dev.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors"
                      title="LinkedIn"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {dev.links.medium && (
                    <a
                      href={dev.links.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-green-600 hover:bg-green-700 rounded-full transition-colors"
                      title="Medium"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredDevelopers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-blue-200 text-lg">ไม่พบ developer ที่ตรงกับการค้นหา</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-blue-900/40 backdrop-blur-lg border border-blue-800/50 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              ต้องการเข้าร่วมชุมชนนักพัฒนา?
            </h2>
            <p className="text-blue-200 mb-6">
              สมัครเข้าร่วมกับเราและแสดงผลงานของคุณให้คนอื่นได้เห็น
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-white">
              เข้าร่วมชุมชน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
