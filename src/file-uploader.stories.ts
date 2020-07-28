import { storiesOf } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { OcCommonLibModule, OcFileUploadComponent } from 'projects/oc-ng-common-component/src/public-api';
import { FileDetails } from 'oc-ng-common-service';

const modules = {
    imports: [OcCommonLibModule]
};

const file1 = new FileDetails()
file1.fileName = 'Product_image.png';
file1.fileUploadProgress=0;


const file2 = new FileDetails();
file2.fileName = 'Product_image.png';
file2.fileUploadProgress=50;

const file3 = new FileDetails();
file3.fileName = 'Product_side_image.png';
file3.fileUploadProgress=75;

const file4 = new FileDetails();
file4.fileName = "Product_backside_image.png";
file4.fileUploadProgress=100;
file4.fileIconUrl="https://stage1-philips-market-test.openchannel.io/assets/img/item-1.png"
file4.fileUrl="https://stage1-philips-market-test.openchannel.io/assets/img/item-1.png";
file4.fileSize=2048000;
file4.fileUploadTime=1595942005169;

storiesOf('File Uploader', module)
    .addDecorator(withA11y)
    .add('Single File Empty', () => ({
        component: OcFileUploadComponent,
        moduleMetadata: modules,
        props:{
        }
    })).add('Single File With Data', () => ({
        component: OcFileUploadComponent,
        moduleMetadata: modules,
        props:{
            files:[file2],
            defaultFileIcon:'https://stage1-philips-market-test.openchannel.io/assets/img/item-1.png'
        }
    })).add('Multi File Empty', () => ({
        component: OcFileUploadComponent,
        moduleMetadata: modules,
        props:{
            isMultiFile:true,
            defaultFileIcon:'https://stage1-philips-market-test.openchannel.io/assets/img/item-1.png'
        }
    })).add('Multi File With Data', () => ({
        component: OcFileUploadComponent,
        moduleMetadata: modules,
        props:{
            isMultiFile:true,
            files:[file1,file2,file3,file4],
            defaultFileIcon:'https://stage1-philips-market-test.openchannel.io/assets/img/item-1.png'
        }
    }));