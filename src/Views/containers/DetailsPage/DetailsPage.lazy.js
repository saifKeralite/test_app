import React, { lazy, Suspense } from 'react';

const LazyDetailsPage = lazy(() => import('./DetailsPage'));

const DetailsPage = props => (
  <Suspense fallback={null}>
    <LazyDetailsPage {...props} />
  </Suspense>
);

export default DetailsPage;
