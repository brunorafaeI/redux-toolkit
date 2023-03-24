import { lazy, Suspense } from "react";
import Loading from "./Loading";

export const DynamicLazyLoader = ({ pageContent, fallback }) => {
  const LazyComponent = lazy(() => import(`../pages/${pageContent.toLowerCase()}`))

  return (
    <Suspense fallback={fallback || <Loading />}>
      <LazyComponent />
    </Suspense>
  );
};
