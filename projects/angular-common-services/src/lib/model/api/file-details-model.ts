export class FileDetailsResponse {
    fileId: string;
    fileUrl: string;
    name: string;
    size: number;
    uploadDate: number;
    fileUploadProgress: number;
    fileIconUrl: string;
    contentType: string;
    isPrivate: boolean;
    mimeCheck: string;
    virusScan: any;
    isError: boolean;
}