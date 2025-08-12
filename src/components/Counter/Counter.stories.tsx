import type { Meta, StoryObj } from '@storybook/preact-vite';
import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
    title: 'Components/Counter',
    component: Counter,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
