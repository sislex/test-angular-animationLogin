import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {AuthComponent} from "./auth.component";

const meta: Meta<AuthComponent> = {
  title: 'UI Components/AuthComponent',
  component: AuthComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: 500px; position: relative">${story}</div>`
    ),
  ],
  render: (args: any) => ({
    props: {
      ...args,
      // events: action('emitter'),
    },
    template: `
        <auth ${argsToTemplate(args)}></auth>
    `,
  }),
};

export default meta;
type Story = StoryObj<AuthComponent>;

export const Primary: Story = {
  args: {
  }
}
