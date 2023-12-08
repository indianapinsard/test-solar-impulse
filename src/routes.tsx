import { ErrorPage, HomePage, ProjectPage } from './pages'

export const HOME_URL = '/'
export const ENERGY_URL = (uuid = ':uuid') => `energy/${uuid}`

const routes = [
    {
        path: HOME_URL,
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: ENERGY_URL(),
        element: <ProjectPage />,
        errorElement: <ErrorPage />,
    },
]

export default routes
