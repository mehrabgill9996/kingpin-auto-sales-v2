import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // false: always read fresh data straight from the live API. There's no
  // revalidation webhook set up yet, so a CDN-cached response could show
  // stale inventory for up to ~60s after an edit in Studio.
  useCdn: false,
})
