import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'UI Core/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Esempio base di Card con titolo e contenuto.
 * 
 * Questo componente è stato creato come esempio di componente custom in ui-core
 * poiché non esiste un componente Card generico nel design-react-kit che soddisfi
 * le esigenze base di un contenitore semplice e accessibile.
 * 
 * La Card utilizza classi Tailwind che accedono ai token AGID mappati e
 * implementa le best practice di accessibilità con focus visibile e semantica appropriata.
 */
export const Default: Story = {
  args: {
    title: 'Titolo della Card',
    children: 'Questo è un esempio di contenuto della Card. Il componente è stato implementato seguendo le linee guida di accessibilità e utilizzando le utility Tailwind.',
  },
};

/**
 * Esempio di Card senza titolo, solo con contenuto.
 */
export const WithoutTitle: Story = {
  args: {
    children: 'Questo è un esempio di Card senza titolo, utilizzabile come semplice contenitore.',
  },
};

/**
 * Esempio di Card con contenuto complesso.
 */
export const WithComplexContent: Story = {
  args: {
    title: 'Card con contenuto complesso',
    children: (
      <div>
        <p className="mb-4">Questo è un paragrafo all'interno della Card.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Un pulsante
        </button>
      </div>
    ),
  },
};