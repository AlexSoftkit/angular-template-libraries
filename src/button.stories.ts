import { moduleMetadata, storiesOf } from '@storybook/angular';
import {OcButtonComponent} from 'oc-ng-common-component';
import { OcCommonLibModule } from 'oc-ng-common-component';

const modules = {
  imports: [OcCommonLibModule]
};

export default {
  title: 'Buttons',
  component: OcButtonComponent,
  decorators: [
    moduleMetadata(modules),
  ],
};

const ButtonComponent = (args: OcButtonComponent) => ({
  component: OcButtonComponent,
  moduleMetadata: modules,
  props: args
});

export const Primary = ButtonComponent.bind({});

Primary.args = {
  text: 'Submit',
  type: 'primary'
};

export const Secondary = ButtonComponent.bind({});

Secondary.args = {
  text: 'Cancel',
  type: 'secondary',
};

export const Link = ButtonComponent.bind({});

Link.args = {
  text: 'Submit',
  type: 'link'
};

export const Progress = ButtonComponent.bind({});

Progress.args = {
  text: 'Submit',
  type: 'primary',
  process: true
};


