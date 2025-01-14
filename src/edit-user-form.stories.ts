import { moduleMetadata } from '@storybook/angular';
import { OcCommonLibModule } from '@openchannel/angular-common-components/src/lib/common-components';
import { RouterTestingModule } from '@angular/router/testing';
import {
    OcEditUserFormComponent,
    OcEditUserFormConfig,
    OCOrganization,
    TypeFieldModel,
    TypeModel,
    OcFormComponentsModule,
} from '@openchannel/angular-common-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';

const modules = {
    imports: [OcCommonLibModule, OcFormComponentsModule, ReactiveFormsModule, RouterTestingModule, FormsModule],
};

const accountTypeData: TypeModel<TypeFieldModel> = {
    fields: [
        {
            id: 'name',
            type: 'text',
            label: 'Name',
            attributes: {
                required: true,
            },
        },
        {
            id: 'email',
            type: 'text',
            label: 'Email',
            attributes: {
                required: true,
            },
        },
        {
            id: 'about-me',
            type: 'text',
            attributes: {
                required: true,
            },
            label: 'About me',
        },
    ],
};

const organizationTypeData: TypeModel<TypeFieldModel> = {
    fields: [
        {
            id: 'customData.company',
            type: 'text',
            label: 'Company',
            attributes: {
                required: true,
            },
        },
        {
            id: 'customData.country',
            type: 'text',
            label: 'Country',
            attributes: {
                required: true,
            },
        },
    ],
};

const multiConfigs: OcEditUserFormConfig[] = [
    {
        name: 'First Form',
        account: {
            includeFields: ['name', 'email'],
            typeData: accountTypeData,
            type: 'first-account-form',
        },
        organization: {
            includeFields: ['customData.organization'],
            typeData: organizationTypeData,
            type: 'first-organization-form',
        },
        fieldsOrder: ['email', 'name'],
    },
    {
        name: 'Second Form',
        account: {
            includeFields: ['name', 'email', 'about-me'],
            typeData: accountTypeData,
            type: 'second-account-form',
        },
        organization: {
            includeFields: ['customData.organization', 'customData.country'],
            typeData: organizationTypeData,
            type: 'second-organization-form',
        },
    },
];

const accountData: OCOrganization = {
    name: 'James Bond',
    email: 'test@test.test',
};

const organizationData: OCOrganization = {
    email: null,
    customData: {
        company: 'Test Company',
    },
};

export default {
    title: 'Edit user (organization & account) [BEM]',
    component: OcEditUserFormComponent,
    decorators: [moduleMetadata(modules)],
};

const EditUserFormComponent = (args: OcEditUserFormComponent) => ({
    component: OcEditUserFormComponent,
    moduleMetadata: modules,
    props: args,
});

export const WithoutConfigs = EditUserFormComponent.bind({});
WithoutConfigs.args = {
    formConfigs: null,
    defaultAccountData: accountData,
    defaultOrganizationData: organizationData,
    resultFormData: action('resultFormData'),
};

export const ChangeType = EditUserFormComponent.bind({});
ChangeType.args = {
    formConfigs: multiConfigs,
    enableTypesDropdown: true,
    defaultAccountData: accountData,
    defaultOrganizationData: organizationData,
    resultFormData: action('resultFormData'),
};

export const DisabledChangeType = EditUserFormComponent.bind({});
DisabledChangeType.args = {
    formConfigs: multiConfigs,
    enableTypesDropdown: false,
    defaultAccountData: accountData,
    defaultOrganizationData: organizationData,
    resultFormData: action('resultFormData'),
};

export const PasswordAndCheckboxFields = EditUserFormComponent.bind({});
PasswordAndCheckboxFields.args = {
    formConfigs: multiConfigs,
    enableTypesDropdown: false,
    enableTermsCheckbox: true,
    enablePasswordField: true,
    defaultAccountData: accountData,
    defaultOrganizationData: organizationData,
    resultFormData: action('resultFormData'),
};
