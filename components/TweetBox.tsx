import React, { useState, useRef } from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'

const TweetBox = () => {
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()

  const [image, setImage] = useState<string>('')
  const imageInputRef = useRef<HTMLInputElement>(null)

  // for opening folder for selecting images
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!imageInputRef.current?.value) return

    setImage(imageInputRef.current?.value)

    // sets input blank after submitting
    imageInputRef.current.value = ''
    // closes box
    setImageUrlBoxIsOpen(false)
  }

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src={session?.user?.image || 'https://links.papareact.com/gll'}
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
              <div
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="cursor-pointer rounded-full p-2 transition-transform duration-150 ease-out hover:bg-blue-50"
              >
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
              disabled={!input || !session}
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>

          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter Image URL..."
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}

          {/* after adding image url below code will show that image */}
          {image && <img className='mt-10 h-48 w-full rounded-xl object-contain shadow-lg p-5' src={image} alt="" />}
        </form>
      </div>
    </div>
  )
}

export default TweetBox
