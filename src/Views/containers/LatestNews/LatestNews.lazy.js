import React, { lazy, Suspense } from 'react';

const LazyLatestNews = lazy(() => import('./LatestNews'));

const LatestNews = props => (
  <Suspense fallback={null}>
    <LazyLatestNews {...props} />
  </Suspense>
);

export default LatestNews;
