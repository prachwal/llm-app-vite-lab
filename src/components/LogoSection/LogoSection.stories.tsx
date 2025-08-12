import type { Meta, StoryObj } from '@storybook/preact-vite';
import { LogoSection } from './LogoSection';

/**
 * LogoSection component displays the Vite and Preact logos with links.
 * This component shows the main branding elements of the application.
 */
const meta = {
    title: 'Design System/LogoSection',
    component: LogoSection,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A section containing clickable logos for Vite and Preact with hover effects.',
            },
        },
    },
} satisfies Meta<typeof LogoSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default LogoSection with both logos displayed horizontally
 */
export const Default: Story = {};
