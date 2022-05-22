import React, { useState, useEffect } from 'react'
import { Comment, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import { fetchComments } from '../sanity/utils/fetchComments'

interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([])

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id)
    setComments(comments)
  }

  useEffect(() => {
    refreshComments()
  }, [])

  return (
    <div className="flex cursor-pointer flex-col space-x-3 border-y border-gray-100 p-5 hover:border-gray-200 hover:bg-slate-50">
      <div className="flex space-x-3">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()} ·
            </p>

            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>

          <p>{tweet.text}</p>

          {/* render image only if tweet.image is true (or available) */}
          {tweet.image && (
            <img
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
              src={tweet.image}
              alt=""
            />
          )}

          <div className="mt-5 flex justify-between">
            <div className="group flex cursor-pointer items-center space-x-3 text-gray-400">
              <div className="rounded-full p-2 transition-transform duration-150 ease-out group-hover:bg-blue-100 group-hover:text-blue-400">
                <ChatAlt2Icon className="h-5 w-5" />
              </div>
              <p className="group-hover:text-blue-400">{comments.length}</p>
            </div>
            <div className="group flex cursor-pointer items-center space-x-3 text-gray-400">
              <div className="rounded-full p-2 transition-transform duration-150 ease-out group-hover:bg-green-100 group-hover:text-emerald-500">
                <SwitchHorizontalIcon className="h-5 w-5" />
              </div>
              <p className="group-hover:text-emerald-500">5</p>
            </div>
            <div className="group flex cursor-pointer items-center space-x-3 text-gray-400">
              <div className="rounded-full p-2 transition-transform duration-150 ease-out group-hover:bg-red-100 group-hover:text-red-500">
                <HeartIcon className="h-5 w-5" />
              </div>
              <p className="group-hover:text-red-500">5</p>
            </div>
            <div className="group flex cursor-pointer items-center space-x-3 text-gray-400">
              <div className="rounded-full p-2 transition-transform duration-150 ease-out group-hover:bg-blue-100 group-hover:text-blue-400">
                <UploadIcon className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Comment box logic */}
          {comments?.length > 0 && (
            <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
              {comments.map((comment) => (
                <div key={comment._id} className="relative flex space-x-2">
                  <hr className='absolute left-8 top-14 h-8 border-x border-gray-400/40 z-0'/>
                  <img
                    src={comment.profileImg}
                    alt=""
                    className="mt-2 h-12 w-12 rounded-full object-cover z-10"
                  />
                  <div>
                    <div className="flex items-center space-x-1">
                      <p className="mr-1 font-bold">{comment.username}</p>
                      <p className="hidden text-sm text-gray-500 lg:inline">
                        @{comment.username.replace(/\s+/g, '').toLowerCase()} ·
                      </p>
                      <TimeAgo
                        className="text-sm text-gray-500"
                        date={comment._createdAt}
                      />
                    </div>
                  <p>{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Tweet
