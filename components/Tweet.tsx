import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'

interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {
  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5 hover:bg-slate-50 hover:border-gray-200 cursor-pointer">
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
              <p className="group-hover:text-blue-400">5</p>
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
        </div>
      </div>
    </div>
  )
}

export default Tweet
