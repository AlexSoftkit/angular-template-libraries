import { moduleMetadata } from '@storybook/angular';
import { OcCommonLibModule } from 'oc-ng-common-component/src/lib/common-components';
import { OcLoginComponent } from 'oc-ng-common-component/src/lib/auth-components';
import { action } from '@storybook/addon-actions';
import { UserLoginModel } from 'oc-ng-common-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

/** List of module dependencies and component declarations. Stored as separate var because they are shared among all stories */
const modules = {
  imports: [OcCommonLibModule, BrowserAnimationsModule, RouterTestingModule]
};

const loginEmpty = new UserLoginModel();

const loginFilled = new UserLoginModel();
loginFilled.email = 'zmehta@gmail.com';
loginFilled.password = 'Tenup123#';
loginFilled.isChecked = true;

export default {
  title: 'Login [BEM]',
  component: OcLoginComponent,
  decorators: [
    moduleMetadata(modules),
  ],
};

const LoginComponent = (args: OcLoginComponent) => ({
  component: OcLoginComponent,
  moduleMetadata: modules,
  props: args
});

const defaultProps = {
  submit: action('clicked event'),
  forgotPwdUrl: 'forgotPwd',
  signupUrl: 'signup',
  companyLogoUrl: 'assets/img/logo-company.png',
  loginModelChange: action('model changed'),
};

export const EmptyLogin = LoginComponent.bind({});
EmptyLogin.args = {
  ...defaultProps,
  loginModel: loginEmpty,
};

export const FilledLogin = LoginComponent.bind({});
FilledLogin.args = {
  ...defaultProps,
  loginModel: loginFilled,
};