# Twitter Clone

- Stack used - Next.js, sanity CMS, Typescript, SSR (Server side rendering), Tailwind CSS, NextAuth, GROQ language, React twitter embed and Deploy on vercel
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


- **Also used next-sanity -** https://github.com/sanity-io/next-sanity
```
yarn add next-sanity @portabletext/react @sanity/image-url
```

- Used **React twitter embed** for having RHS panel Feed, We just put username and it gets its feed to panel - https://github.com/saurabhnemade/react-twitter-embed

### How to run project
Make .env.local file in root folder
- adding NEXT_PUBLIC means allow this to see in client as well as server side
- to get API key - go to sanity-project-API-Add API Token
    - Name - Twitter-clone
    - permission - editor - save
    - It will show API token only once so save it
```
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID=projectid  //project id from sanity
SANITY_API_TOKEN=token
```

### Important Commands
```
npm install   //installs Node modules
next dev      //runs project

cd sanity
sanity start  //starts sanity studio 
```

### Useful links 
- [https://v2.tailwindcss.com/docs/guides/nextjs](https://v2.tailwindcss.com/docs/guides/nextjs)
- [https://heroicons.com/](https://heroicons.com/)  → Documentation - https://github.com/tailwindlabs/heroicons
- [https://github.com/saurabhnemade/react-twitter-embed](https://github.com/saurabhnemade/react-twitter-embed)
- Sanity.io - [https://www.sanity.io/sonny](https://www.sanity.io/sonny) 
- Sanity documentation - [https://www.sanity.io/docs/overview-introduction](https://www.sanity.io/docs/overview-introduction)
- [https://github.com/sanity-io/next-sanity](https://github.com/sanity-io/next-sanity)

### To use HeroIcons just import package - check icons here [https://heroicons.com/](https://heroicons.com/) - Search for any icon - remove dash b/w them and add Icon at last
- ex - if icon name is **badge-check** write it as BadgeCheckIcon
- import {Icons} *from* '@heroicons/react/solid' → for solid one
- import {Icons} *from* '@heroicons/react/outline' → for outline one
