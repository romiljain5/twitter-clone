import React, { SVGProps } from 'react'

// Using interface
interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

// Below we have destructured or you can also use props: Props (type)
const SidebarRow = ({ Icon, title }: Props) => {
  return (
    //   using group in classname means whenever you hover over a group, Modify group-hover element
    <div className="flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100 group">
      <Icon className="h-6 w-6" />
      <p className='hidden md:inline-flex group-hover:text-twitter text-base lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow
