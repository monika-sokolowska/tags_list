import { Suspense } from 'react'
import './App.css'
import { ProgressSpinner } from 'primereact/progressspinner'
import { lazy } from 'react'

const Layout = lazy(() => import('./views/Layout/Layout'))

function App() {
    return (
        <div className="App">
            <Suspense fallback={<ProgressSpinner />}>
                <Layout />
            </Suspense>
        </div>
    )
}

export default App
