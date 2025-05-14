"use client";

import { useState } from "react";
import { ExternalLink, Search, FileText, Video, FileQuestion, BookOpen, Link2 } from "lucide-react";
import { StudyResource } from "@/lib/types";

interface ResourceListProps {
  resources: StudyResource[];
}

export default function ResourceList({ resources }: ResourceListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  
  // Filter resources based on search term and filters
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = typeFilter ? resource.type === typeFilter : true;
    const matchesDifficulty = difficultyFilter ? resource.difficulty === difficultyFilter : true;
    
    return matchesSearch && matchesType && matchesDifficulty;
  });
  
  // Get the appropriate icon for each resource type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-5 w-5" />;
      case 'article':
        return <FileText className="h-5 w-5" />;
      case 'pdf':
        return <FileText className="h-5 w-5" />;
      case 'course':
        return <BookOpen className="h-5 w-5" />;
      case 'practice':
        return <FileQuestion className="h-5 w-5" />;
      default:
        return <Link2 className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Study Resources</h2>
        <p className="text-muted-foreground">
          A curated collection of free resources to help you prepare for your exam.
          Filter by type, difficulty, or search for specific topics.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTypeFilter(null)}
            className={`px-3 py-1 text-sm rounded-full ${!typeFilter ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            All Types
          </button>
          <button
            onClick={() => setTypeFilter('video')}
            className={`px-3 py-1 text-sm rounded-full ${typeFilter === 'video' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            Videos
          </button>
          <button
            onClick={() => setTypeFilter('article')}
            className={`px-3 py-1 text-sm rounded-full ${typeFilter === 'article' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            Articles
          </button>
          <button
            onClick={() => setTypeFilter('pdf')}
            className={`px-3 py-1 text-sm rounded-full ${typeFilter === 'pdf' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            PDFs
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setDifficultyFilter(null)}
            className={`px-3 py-1 text-sm rounded-full ${!difficultyFilter ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            All Levels
          </button>
          <button
            onClick={() => setDifficultyFilter('beginner')}
            className={`px-3 py-1 text-sm rounded-full ${difficultyFilter === 'beginner' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            Beginner
          </button>
          <button
            onClick={() => setDifficultyFilter('intermediate')}
            className={`px-3 py-1 text-sm rounded-full ${difficultyFilter === 'intermediate' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setDifficultyFilter('advanced')}
            className={`px-3 py-1 text-sm rounded-full ${difficultyFilter === 'advanced' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
          >
            Advanced
          </button>
        </div>
      </div>
      
      {filteredResources.length === 0 ? (
        <div className="bg-muted p-8 rounded-lg text-center">
          <p className="text-muted-foreground">No resources match your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="border border-border rounded-lg p-5 hover:border-primary/60 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    {getResourceIcon(resource.type)}
                  </div>
                  <div>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted">
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </span>
                    {resource.duration && (
                      <span className="text-xs ml-2 text-muted-foreground">
                        {resource.duration}
                      </span>
                    )}
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  resource.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                  resource.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                  'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                }`}>
                  {resource.difficulty.charAt(0).toUpperCase() + resource.difficulty.slice(1)}
                </span>
              </div>
              
              <h3 className="font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.topics.map((topic, index) => (
                  <span key={index} className="text-xs px-2 py-0.5 rounded-full bg-muted/50">
                    {topic}
                  </span>
                ))}
              </div>
              
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Access Resource <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}