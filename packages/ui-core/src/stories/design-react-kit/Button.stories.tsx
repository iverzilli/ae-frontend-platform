import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'design-react-kit'; // Corretto path di import

// Configurazione Meta per il componente Button
const meta: Meta<typeof Button> = {
  title: 'Design React Kit/Button', // Path nella UI di Storybook
  component: Button,
  tags: ['autodocs'], // Abilita documentazione automatica
  argTypes: { // Controlli opzionali per le props
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'lg'],
    },
    outline: { control: 'boolean' },
    block: { control: 'boolean' },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    // Aggiungere altri argTypes rilevanti per il Button del kit
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Storia Principale (Default)
export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Bottone Primario', // Testo del bottone
    onClick: () => alert('Button clicked!'), // Azione di esempio
  },
};

// Altre storie per varianti comuni
export const Secondary: Story = {
  args: {
    ...Primary.args, // Eredita args
    color: 'secondary',
    children: 'Bottone Secondario',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
    children: 'Bottone Disabilitato',
  },
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    outline: true,
    children: 'Bottone Outline',
  },
};