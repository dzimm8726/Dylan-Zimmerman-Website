"use client";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { useState, useEffect } from "react";
import { projects } from "@/lib/projects";

export default function Home() {
  const [showSkills, setShowSkills] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show skills popup when user scrolls down 100px or more
      setShowSkills(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    "TypeScript",
    "Python",
    "React/Next.js",
    "Arduino",
    "Tailwind CSS",
    "Machine Learning",
    "System Design",
    "Web Design"
  ];

  // Get only featured projects from your projects.ts file
  const featuredProjects = projects.filter(project => project.featured).map(project => ({
    title: project.title,
    description: project.summary,
    tags: project.tags,
    link: project.github, // Use GitHub as the main link
    image: project.image,
    imageAlt: `Screenshot of ${project.title}`,
    githubUrl: project.github
  }));

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const currentProject = featuredProjects[currentProjectIndex];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-zinc-100">
          Dylan Zimmerman - <span className="text-blue-400">Computer Science Student</span>
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          CS major focused on building reliable, fast systems at the intersection of{" "}
          <strong>AI</strong>, <strong>computer vision</strong>, and{" "}
          <strong>automation</strong>.
        </p>
      </header>

      <section className="flex flex-col md:flex-row gap-8">
        {/* Featured Projects with Navigation */}
        <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-zinc-100">Featured Projects</h2>
            <div className="flex items-center gap-4">
              {/* Project Counter */}
              <span className="text-sm text-zinc-400">
                {currentProjectIndex + 1} of {featuredProjects.length}
              </span>
              <a href="/projects" className="text-sm text-blue-400 hover:underline">
                See all
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          {featuredProjects.length > 1 && (
            <>
              <button
                onClick={prevProject}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 transition-all duration-200 hover:scale-105"
                aria-label="Previous project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>

              <button
                onClick={nextProject}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-black/70 transition-all duration-200 hover:scale-105"
                aria-label="Next project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </>
          )}

          {/* Project Card with Transition */}
          <div className="transition-all duration-300 ease-in-out">
            {currentProject ? (
              <ProjectCard
                title={currentProject.title}
                description={currentProject.description}
                tags={currentProject.tags}
                link={currentProject.link}
                image={currentProject.image}
                imageAlt={currentProject.imageAlt}
                githubUrl={currentProject.githubUrl}
              />
            ) : (
              <div className="text-center text-zinc-400 py-8">
                No featured projects available
              </div>
            )}
          </div>

          {/* Dots Indicator */}
          {featuredProjects.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentProjectIndex 
                      ? 'bg-blue-400 w-6' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Headshot with Skills Popup */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-full aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 relative group">
            <Image
              src="/headshot.jpg"
              alt="Dylan Zimmerman headshot"
              width={500}
              height={500}
              className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
            />
            
            {/* Skills Popup */}
            <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm rounded-2xl transition-all duration-500 ease-out ${
              showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <div className="flex flex-col justify-center items-center h-full p-6">
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">Skills & Technologies</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {skills.map((skill, index) => (
                      <div
                        key={skill}
                        className="bg-blue-500/20 border border-blue-400/30 rounded-lg px-3 py-2 text-sm text-blue-100 text-center transform transition-all duration-300 hover:bg-blue-500/30 hover:scale-105"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: showSkills ? 'slideInUp 0.5s ease-out forwards' : 'none'
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}