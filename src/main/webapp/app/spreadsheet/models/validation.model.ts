export interface WBValidationModel {
    registrants: SheetValidationModel;
    services: SheetValidationModel;
}

export interface SheetValidationModel {
    headers: Array<any>;
    warnings: Array<any>
    headerValid: boolean;
    valid: boolean;
    errors: Array<any>
}
