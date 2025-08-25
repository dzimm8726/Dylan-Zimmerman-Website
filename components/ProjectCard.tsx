import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description?: string;
  summary?: string;
  tags: string[];
  link?: string;
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  github?: string;
}

export default function ProjectCard({ 
  title = "", 
  description = "",
  summary = "",
  tags = [], 
  link = "", 
  image = "", 
  imageAlt = "",
  githubUrl = "",
  github = ""
}: ProjectCardProps) {
  const projectDescription = summary || description || "";
  const projectGithubUrl = github || githubUrl;
  const mainLink = link || projectGithubUrl || "#";

  const handleImageClick = (e: React.MouseEvent) => {
    if (projectGithubUrl) {
      e.preventDefault();
      window.open(projectGithubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.image-container') || 
        (e.target as HTMLElement).closest('.page-link')) {
      return;
    }
    if (mainLink && mainLink !== "#") {
      window.open(mainLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="group">
      <div 
        onClick={handleCardClick}
        className="block rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10 cursor-pointer"
      >
        <div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 mb-3">
            {projectDescription}
          </p>
          
          {image && (
            <div 
              className="image-container relative w-full h-48 mb-6 overflow-hidden rounded-lg bg-zinc-800 cursor-pointer"
              onClick={handleImageClick}
            >
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {projectGithubUrl && (
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-sm text-white font-medium">
                    View Page
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags && tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {projectGithubUrl && (
            <div className="page-link">
              {projectGithubUrl.startsWith('http') ? (
                <>
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a
                    href={projectGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Page
                  </a>
                </>
              ) : (
                <Link
                  href={projectGithubUrl}
                  className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Page
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}