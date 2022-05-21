import React, { useState } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'

const TweetBox = () => {
  const [input, setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll"
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form action="" className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            placeholder="What's Happening?"
          />
          <div className="flex items-center">
            <div className="flex flex-1 text-twitter">
              <div className="cursor-pointer rounded-full p-2 transition-transform duration-150 ease-out hover:bg-blue-50">
                <PhotographIcon className="h-5 w-5" />
              </div>
              <div className="cursor-pointer rounded-full p-2 transition-transform duration-150 ease-out hover:bg-blue-50">
                <SearchCircleIcon className="h-5 w-5" />
              </div>
              <div className="cursor-pointer rounded-full p-2 transition-transform duration-150 ease-out hover:bg-blue-50">
                <EmojiHappyIcon className="h-5 w-5" />{' '}
              </div>
              <div className="cursor-pointer rounded-full p-2 transition-transform duration-150 ease-out hover:bg-blue-50">
                <CalendarIcon className="h-5 w-5" />{' '}
              </div>
              <div className="cursor-pointer rounded-full p-2 transition-transform duration-150 ease-out hover:bg-blue-50">
                <LocationMarkerIcon className="h-5 w-5" />{' '}
              </div>
            </div>
            <button
              disabled={!input}
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
