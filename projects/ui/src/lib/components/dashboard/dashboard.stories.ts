import {argsToTemplate, componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {DashboardComponent} from "./dashboard.component";

const meta: Meta<DashboardComponent> = {
  title: 'UI Components/DashboardComponent',
  component: DashboardComponent,
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
        <dashboard ${argsToTemplate(args)}></dashboard>
    `,
  }),
};

export default meta;
type Story = StoryObj<DashboardComponent>;

export const Primary: Story = {
  args: {
  }
}
