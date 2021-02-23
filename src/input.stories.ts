import { storiesOf } from '@storybook/angular';
import { OcCheckboxComponent, OcInputComponent } from 'oc-ng-common-component/src/lib/common-components';
import { withA11y } from '@storybook/addon-a11y';

/** List of module dependencies and component declarations. Stored as separate var because they are shared among all stories */
const modules = {
    imports: [],
};

storiesOf('Input', module)
    .addDecorator(withA11y)
    .addParameters({
        component: OcInputComponent,
    })
    .add('Text', () => ({
        component: OcInputComponent,
        props: {
            focus: true,
        },
        moduleMetadata: modules,
    })).add('Checkbox', () => ({
        component: OcCheckboxComponent,
        props: {
            labelText: 'Custom Checkbox',
            requiredIndicator: true,
    },
    }));
