import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import NavBar from '@/components/navBar/NavBar.tsx';

const Home = lazy(() => import('@/components/home/Home.tsx'));
const Article = lazy(() => import('@/components/article/Article.tsx'));
const NoMatch = lazy(() => import('@/components/noMatch/NoMatch.tsx'));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pitch/:pitchType" element={<Article />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
