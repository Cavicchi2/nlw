import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-default rounded-full px-3 h-12 text-white flex items-center gap-1 group">
        <ChatTeardropDots className='w-6 h-6'/>
        <span className="
          max-w-0 overflow-hidden opacity-0
          group-hover:max-w-xs 
          group-hover:opacity-100
          transition-all duration-400 ease-linear
        ">
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}