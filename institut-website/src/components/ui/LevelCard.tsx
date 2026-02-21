'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LevelCardProps {
  levelName: string;
  description: string;
  duration: string;
  fees: {
    online: number;
    physical: number;
    hybrid: number;
  };
  registration: number;
  discount?: number;
  languageId?: string;
  levelId?: string;
}

const LevelCard = ({ levelName, description, duration, fees, registration, discount, languageId, levelId }: LevelCardProps) => {
  const [selectedMode, setSelectedMode] = useState<'online' | 'physical' | 'hybrid'>('online');
  const router = useRouter();

  const handleEnroll = () => {
    // Navigate to enrollment page with query params for pre-filling
    const params = new URLSearchParams();
    if (languageId) params.set('language', languageId);
    if (levelId) params.set('level', levelId);
    if (selectedMode) params.set('mode', selectedMode);
    
    router.push(`/enroll?${params.toString()}`);
  };

  return (
    <div className="card">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-foreground mb-2">{levelName}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <svg className="w-4 h-4 text-muted-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm text-muted">{duration}</span>
      </div>

      {/* Learning Mode Selector */}
      <div className="mb-4">
        <h4 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">Select Learning Mode</h4>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setSelectedMode('online')}
            className={`px-3 py-2.5 text-xs font-medium rounded-lg transition-all border ${
              selectedMode === 'online'
                ? 'bg-accent text-surface border-accent'
                : 'bg-accent-light text-muted border-transparent hover:border-accent/30'
            }`}
          >
            <span className="block">Online</span>
          </button>
          <button
            onClick={() => setSelectedMode('physical')}
            className={`px-3 py-2.5 text-xs font-medium rounded-lg transition-all border ${
              selectedMode === 'physical'
                ? 'bg-accent text-surface border-accent'
                : 'bg-accent-light text-muted border-transparent hover:border-accent/30'
            }`}
          >
            <span className="block">Physical</span>
          </button>
          <button
            onClick={() => setSelectedMode('hybrid')}
            className={`px-3 py-2.5 text-xs font-medium rounded-lg transition-all border ${
              selectedMode === 'hybrid'
                ? 'bg-accent text-surface border-accent'
                : 'bg-accent-light text-muted border-transparent hover:border-accent/30'
            }`}
          >
            <span className="block">Hybrid</span>
          </button>
        </div>
      </div>

      {/* Fee Display */}
      <div className="bg-accent-light/50 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted mb-1">Monthly Fee ({selectedMode})</p>
            <p className="text-2xl font-medium text-foreground">${fees[selectedMode]}</p>
          </div>
          <div>
            <p className="text-xs text-muted mb-1">Registration Fee</p>
            <p className="text-lg font-medium text-foreground">${registration}</p>
          </div>
          {discount && (
            <>
              <div className="col-span-2">
                <p className="text-xs text-muted mb-1">Early Bird Discount</p>
                <p className="text-base font-medium text-success">-${discount} off first month</p>
              </div>
              <div className="col-span-2 pt-3 border-t border-border-subtle">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">First Month Total</span>
                  <span className="text-lg font-semibold text-foreground">
                    ${fees[selectedMode] + registration - discount}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <button onClick={handleEnroll} className="w-full btn-primary">
        Enroll Now
      </button>
    </div>
  );
};

export default LevelCard;
