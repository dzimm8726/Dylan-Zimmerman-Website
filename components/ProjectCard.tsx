// ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description?: string; // Keep for backward compatibility
  summary?: string; // Add support for summary
  tags: string[];
  link?: string; // Make optional since projects might not have separate links
  image?: string;
  imageAlt?: string;
  githubUrl?: string; // Keep for backward compatibility
  github?: string; // Add support for github property
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
  // Use summary if available, otherwise use description
  const projectDescription = summary || description || "";
  // Use github if available, otherwise use githubUrl
  const projectGithubUrl = github || githubUrl;
  // Use main link if available, otherwise use github URL
  const mainLink = link || projectGithubUrl || "#";

  const handleImageClick = (e: React.MouseEvent) => {
    if (projectGithubUrl) {
      e.preventDefault();
      window.open(projectGithubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on the image area or page link
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
        {/* Content Section */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 mb-3">
            {projectDescription}
          </p>
          
          {/* Image Section - Between description and tags */}
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
              {/* Page overlay that appears on hover */}
              {projectGithubUrl && (
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-sm text-white font-medium">
                    View Page
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Tags */}
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

          {/* Page Link */}
          {projectGithubUrl && (
            <div className="page-link">
              <Link
                href={projectGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} className="mr-2" />
                View Page
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}