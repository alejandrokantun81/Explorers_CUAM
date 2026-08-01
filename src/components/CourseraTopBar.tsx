import React from "react";
import { Search } from "lucide-react";
import { ExplorersLogo } from "./ExplorersLogo";

interface CourseraTopBarProps {
  onOpenAuditModal?: () => void;
  activeSectionTitle?: string;
}

export const CourseraTopBar: React.FC<CourseraTopBarProps> = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30 px-4 sm:px-6 py-2 flex items-center justify-between shadow-2xs">
      {/* Left Branding - EXPLORERS Logo */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <ExplorersLogo className="h-12 w-auto" />
        </div>
      </div>
    </header>
  );
};

