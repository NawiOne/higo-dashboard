import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Summary from './pages/Summary';
import Loader from './common/Loader';
import routes from './routes';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Summary />} />
          {routes.map((routes, index) => {
            const { path, component: Component, children } = routes;
            if (children) return (
              <Route
                key={index}
                path={path}
              >
                <Route
                  index
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
                {children.map((child, childIndex) => {
                  const { path: childPath, component: ChildComponent } = child;
                  return (
                    <Route
                      key={childIndex}
                      path={childPath}
                      element={
                        <Suspense fallback={<Loader />}>
                          <ChildComponent />
                        </Suspense>
                      }
                    />
                  );
                })}
              </Route>
            );
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              >
              </Route>
            )
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
