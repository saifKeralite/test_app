import React, { lazy, Suspense } from 'react';

const LazySearchResult = lazy(() => import('./SearchResult'));

const SearchResult = props => (
  <Suspense fallback={null}>
    <LazySearchResult {...props} />
  </Suspense>
);

export default SearchResult;
