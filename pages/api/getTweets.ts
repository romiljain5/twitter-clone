// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import {sanityClient} from '../../sanity'
import { Tweet } from '../../typings'

const feedQuery = groq`
    *[_type == "tweet" && !blockTweet]{
        _id,
        ...
    } | order(_createdAt desc)
`

type Data = {
  tweets: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // it will programatically execute vision in sanity studio, Code in feedQuery
    const tweets: Tweet[] = await sanityClient.fetch(feedQuery);
  res.status(200).json({tweets});
}
 