import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import ArtWorkshop from '@/pages/ArtMasterkayaPage/ArtMasterskayaPage'
import CinemaSchoolPage from '@/pages/CinemaSchoolPage/CinemaSchoolPage'
import { MainPage } from '@/pages/MainPage/MainPage'
import MasterClassesPage from '@/pages/MasterClassesPage/MasterClassesPage'
import SummerCamp from '@/pages/SummerCamp/SummerCampPage'
import { Navbar } from '@/shared'

const App: FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cinema-school" element={<CinemaSchoolPage />} />
                <Route path="/master-classes" element={<MasterClassesPage />} />
                <Route path="/summer-camp" element={<SummerCamp />} />
                <Route path="/art-masterskaya" element={<ArtWorkshop />} />
                <Route path="*" element={<MainPage />} />
            </Routes>
        </>
    )
}

export default App
