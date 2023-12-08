import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProject, IEnergy } from '../interfaces'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api',
})

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: [],
    endpoints: (build) => ({
        listProjects: build.query<IProject[], void>({
            query: () => 'projects',
        }),
        getProject: build.query<IEnergy[], string>({
            query: (uuid) => ({
                url: 'energy',
                params: { uuid },
            }),
        }),
    }),
})

export const { useListProjectsQuery, useGetProjectQuery } = api
