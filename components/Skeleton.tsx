
import React from 'react';

export const WineSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="bg-neutral-800 aspect-[3/4] rounded-sm"></div>
    <div className="h-6 bg-neutral-800 w-3/4 rounded"></div>
    <div className="h-4 bg-neutral-800 w-1/2 rounded"></div>
  </div>
);

export const PostSkeleton = () => (
  <div className="animate-pulse space-y-6">
    <div className="bg-neutral-800 aspect-video rounded-sm"></div>
    <div className="h-8 bg-neutral-800 w-3/4 rounded"></div>
    <div className="h-20 bg-neutral-800 w-full rounded"></div>
  </div>
);
