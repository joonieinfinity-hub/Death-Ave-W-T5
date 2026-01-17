'use client';

import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Death Ave Wines`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || "Boutique wine shop in NYC specializing in low-intervention wines.");
    }
  }, [title, description]);

  return null;
};

export default SEO;