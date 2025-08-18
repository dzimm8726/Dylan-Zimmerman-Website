// ProjectCard.tsx
import Image from "next/image";

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
    // Don't navigate if clicking on the image area or GitHub link
    if ((e.target as HTMLElement).closest('.image-container') || 
        (e.target as HTMLElement).closest('.github-link')) {
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
              {/* GitHub overlay that appears on hover */}
              {projectGithubUrl && (
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-sm text-white font-medium">
                    View on GitHub
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

          {/* GitHub Link */}
          {projectGithubUrl && (
            <div className="github-link">
              <a
                href={projectGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}