# Twitter Clone

- Stack used - Next.js, sanity CMS, Typescript, SSR (Server side rendering), Tailwind CSS, NextAuth, GROQ language, React Twitter Embed, next-sanity and Deploy on vercel
- The content loading on our twitter app will be through SSR

### About Sanity
- How to query sanity platform using GROQ (query language similar to graphQL)
- Will use sanity as it is a content platform, use Sanity studio to create our structured content
- Sanity studio will allow us to store our tweets, Allow us to have comments reference to each tweet (signin/signup to sanity account with your account)
- Sanity - install sanity globally (**npm install -g @sanity/cli**) - use sanity init in project with coupon (**sanity init --coupon sonny2022)**
- After building sanity, You will get sanity folder inside project - Think of it as a small project inside your project
    - **cd sanity**
    - **sanity start**  → Starts sanity studio on your machine
    - Then login in screen at port 3333- 
- When you launch studio you can see that sanity provides functionality of providing comments with reference to posts while creating them
- You can see your tweets, fetched from API (getTweets.ts) which fetches from sanity studio using groq


- **Also used next-sanity -** https://github.com/sanity-io/next-sanity
```
yarn add next-sanity @portabletext/react @sanity/image-url
```

- Used **React twitter embed** for having RHS panel Feed, We just put username and it gets its feed to panel - https://github.com/saurabhnemade/react-twitter-embed

- **react-timeago** npm library - shows how long ago tweet was made it updates time without reloading and takes time from our api - [https://www.npmjs.com/package/react-timeago](https://www.npmjs.com/package/react-timeago) (**yarn add react-timeago**)
    - to add type definition for react-timeago - (**yarn add --dev @types/react-timeago**)

- Used **getServerSideProps** - If you export a function called getServerSideProps
 (Server-Side Rendering) from a page, Next.js will pre-render this page on each request using the data returned by getServerSideProps

- **typings.d.ts** file which defines type definition for typescript

- Used **React-hot-toast** - creates toast - [https://react-hot-toast.com/](https://react-hot-toast.com/) (**yarn add react-hot-toast**)

### Important project links
- http://localhost:3000/
- http://localhost:3333/vision --> fetch here using below code
    - ```
        *[_type == "tweet" && !blockTweet]{
        _id,
        ...
        } | order(_createdAt desc)
     ```
- http://localhost:3333/desk

### How to run project
Make .env.local file in root folder
- adding NEXT_PUBLIC means allow this to see in client as well as server side
- to get API key - go to sanity-project-API-Add API Token
    - Name - Twitter-clone
    - permission - editor - save
    - It will show API token only once so save it
```
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=projectid      //project id from sanity
SANITY_API_TOKEN=token
NEXT_PUBLIC_BASE_URL=http://localhost:3000/  //later replace when hosting
```
- http://localhost:3000/api/getTweets - go to this API to get tweets

### Important Commands
```
npm install   //installs Node modules
yarn dev      //runs project

cd sanity
sanity start  //starts sanity studio 
```

### To use HeroIcons just import package - check icons here [https://heroicons.com/](https://heroicons.com/) - Search for any icon - remove dash b/w them and add Icon at last
- ex - if icon name is **badge-check** write it as BadgeCheckIcon
- import {Icons} *from* '@heroicons/react/solid' → for solid one
- import {Icons} *from* '@heroicons/react/outline' → for outline one

### Useful links 
- [https://v2.tailwindcss.com/docs/guides/nextjs](https://v2.tailwindcss.com/docs/guides/nextjs)
- [https://heroicons.com/](https://heroicons.com/)  → Documentation - https://github.com/tailwindlabs/heroicons
- [https://github.com/saurabhnemade/react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- Sanity.io - [https://www.sanity.io/sonny](https://www.sanity.io/sonny) 
- Sanity documentation - [https://www.sanity.io/docs/overview-introduction](https://www.sanity.io/docs/overview-introduction)
- [https://github.com/sanity-io/next-sanity](https://github.com/sanity-io/next-sanity)
- [https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
- [https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html)
- [https://www.npmjs.com/package/react-timeago](https://www.npmjs.com/package/react-timeago)
- [https://react-hot-toast.com/](https://react-hot-toast.com/) 

