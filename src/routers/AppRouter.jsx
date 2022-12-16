import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import PlayPage from '../pages/PlayPage'
import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/play" element={<PlayPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )

}

export default AppRouter
