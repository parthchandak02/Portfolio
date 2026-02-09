import { useEffect, useState, useMemo } from 'react';
import Layout from './components/Layout';
import Canvas3D from './components/Canvas3D';
// GlassNavigation removed - replaced with white space placeholder
import LightToggle from './components/LightToggle';
import LockToggle from './components/LockToggle';
import PlayModeToggle from './components/PlayModeToggle';
import Timeline from './components/Timeline';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import UITypewriter from './components/UITypewriter';
import useLightMode from './hooks/useLightMode';
import useGlobalMouse from './hooks/useGlobalMouse';
import useScrollHighlight from './hooks/useScrollHighlight';
import { timelineData } from './data/timelineData';
import { TypewriterHighlightProvider } from './contexts/TypewriterHighlightContext';
import ScrollTypewriterController from './components/ScrollTypewriterController';

/**
 * Main App component - Clean, modular structure following React 2024 best practices
 * 
 * Features:
 * - Modular component structure
 * - Separation of concerns (UI, 3D, logic)
 * - Custom hooks for state management
 * - CSS modules for styling
 * - Reusable components
 * - Light beam lock/unlock functionality
 * - Responsive sidebar layout with timeline filters and social links
 * - Fast typewriter effect in UI layer
 */
export default function App() {
  const { lightMode, toggleLightMode } = useLightMode(false);
  // Single source of truth for all mouse state
  const { isLocked, toggleLock, viewportPosition } = useGlobalMouse();
  
  // Filter state for the timeline - now supports multiple selected filters (toggle-based)
  const [activeFilters, setActiveFilters] = useState([]);
  
  // Play mode state - toggle between interactive mode and resume reading mode (default: true for immediate fun experience)
  const [isPlayMode, setIsPlayMode] = useState(true);
  const togglePlayMode = () => {
    const newPlayMode = !isPlayMode;
    setIsPlayMode(newPlayMode);
    
    if (newPlayMode) {
      // Entering play mode: automatically unlock the light beam for better UX
      if (isLocked) {
        toggleLock();
      }
    } else {
      // Exiting play mode (returning to resume): automatically lock to avoid distracting rainbow
      if (!isLocked) {
        toggleLock();
      }
    }
  };
  
  // Track which category section is currently visible for sidebar highlighting
  const { visibleCategory } = useScrollHighlight('all');

  // Get unique categories for filter buttons (excluding 'all')
  const categories = useMemo(() => {
    return [...new Set(timelineData.map(item => item.category?.toLowerCase()).filter(Boolean))];
  }, []);

  // Format filters for sidebar components
  const filters = useMemo(() => {
    return categories.map(category => ({
      key: category,
      label: category.charAt(0).toUpperCase() + category.slice(1)
    }));
  }, [categories]);

  // Toggle filter function - single-select behavior (radio button style)
  const toggleFilter = (categoryKey) => {
    setActiveFilters(prev => {
      if (prev.includes(categoryKey)) {
        // If clicking the active filter, turn it off (show all)
        return [];
      } else {
        // Turn off all others and activate only this one
        return [categoryKey];
      }
    });
  };

  // Sync html and body background with light mode to prevent edge bleeding
  useEffect(() => {
    const className = lightMode ? 'light-mode' : 'dark-mode';
    document.documentElement.className = className;
    document.body.className = className;
  }, [lightMode]);

  return (
    <TypewriterHighlightProvider>
      <ScrollTypewriterController />
      <Layout 
        lightMode={lightMode}
        darkMode={!lightMode}
        leftSidebar={!isPlayMode && categories.length > 1 ? (
          <LeftSidebar
            filters={filters}
            activeFilters={activeFilters}
            visibleCategory={visibleCategory}
            onFilterToggle={toggleFilter}
            lightMode={lightMode}
          />
        ) : null}
        rightSidebar={!isPlayMode ? (
          <RightSidebar
            lightMode={lightMode}
          />
        ) : null}
      >
        {/* 3D Canvas Background */}
        <Canvas3D 
          lightMode={lightMode} 
          viewportPosition={viewportPosition} 
          isLocked={isLocked}
        />
        
        {/* UI Overlay Layer */}
        <div className="layout__ui">
          {/* Fixed UI Components */}
          <LightToggle lightMode={lightMode} onToggle={toggleLightMode} />
          <LockToggle isLocked={isLocked} onToggle={toggleLock} />
          <PlayModeToggle isPlayMode={isPlayMode} onToggle={togglePlayMode} />
          
          {/* Main Content Area - Typewriter always shows, other content conditional */}
          <div className="main-content-scroll">
            {/* Typewriter that always shows regardless of play mode */}
            <UITypewriter lightMode={lightMode} />
            
            {/* Resume content - Hidden in play mode */}
            {!isPlayMode && (
              <>
                {/* Empty space container to showcase prism/rainbow effects */}
                <div className="navigation-placeholder" style={{
                  width: '100%',
                  height: '400px',
                  minHeight: '35vh',
                  marginBottom: '3rem'
                }}>
                  {/* Completely empty - just space for prism effects */}
                </div>
                <Timeline 
                 data={timelineData}
                 activeFilters={activeFilters}
                 showFilters={false} // Filters are now handled by LeftSidebar
                 lightMode={lightMode}
                 className="timeline-in-scroll"
               />
              </>
            )}
          </div>
        </div>
      </Layout>
    </TypewriterHighlightProvider>
  );
}
