import React, { lazy, Suspense } from 'react';

const LazyFeaturedNews = lazy(() => import('./FeaturedNews'));

const FeaturedNews = props => (
  <Suspense fallback={null}>
    <LazyFeaturedNews {...props} />
  </Suspense>
);

export default FeaturedNews;
