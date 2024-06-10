import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {LoginComponent} from "./login.component";

const meta: Meta<LoginComponent> = {
  title: 'UI Components/LoginComponent',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: any) => ({
    props: {
      ...args,
      // events: action('emitter'),
    },
    template: `
        <login ${argsToTemplate(args)} (emitter)="events($event)"></login>
    `,
  }),
};

export default meta;
type Story = StoryObj<LoginComponent>;

export const Primary: Story = {
  args: {
  }
}
