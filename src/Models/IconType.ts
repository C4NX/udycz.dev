export enum IconTypeEnum {
    Url = "url",
    Brand = "brand",
    Document = "document",
}

export interface IconType {
    type: IconTypeEnum;
    value: string;
    color?: string;
}