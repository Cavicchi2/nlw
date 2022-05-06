import { CloseButton } from './CloseButton'
import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';
import { useState } from 'react';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      src: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      src: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      src: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="
    bg-zinc-900 p-4 relative rounded-2xl mb-4 
      flex flex-col items-center shadow-lg
      w-[calc(100vw-2rem)] md:w-auto
    ">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFeedbackType(key as FeedbackType)}
                className="bg-zinc-800 py-5 rounded-lg w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-hover focus:border-brand-hover focus:outline-none">
                <img src={value.image.src} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
        }) }
      </div>
      <footer className="text-xs text-neutral-400">
        Feito com amor por <a href="https://github.com/Cavicchi2" className="underline underline-offset-2">Cavicchi2</a>
      </footer>
    </div>
  );
}