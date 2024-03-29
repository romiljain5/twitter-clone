import {createClient} from 'next-sanity'

export const config = {
    // below dataset takes data from production saved in sanity, Like tweets you can check in you account
    // account - project-name - dataset - production
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === 'production',
  }

//  Set up the client for fetching data in the getProps page functions
//  will use below code to communicate with sanity backend
export const sanityClient = createClient(config)