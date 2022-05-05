import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5">
      <Popover.Panel>Hello World</Popover.Panel>

      <Popover.Button onClick='' className="bg-brand-default rounded-full px-3 h-12 text-white flex items-center gap-1 group">
        <ChatTeardropDots className='w-6 h-6'/>
        <span className="max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-xs transition-all duration-400 ease-linear">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}