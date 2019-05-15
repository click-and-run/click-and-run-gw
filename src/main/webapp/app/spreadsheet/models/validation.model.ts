export interface WorkbookValidationModel {
    valid: boolean;
    validations: Map<string, SheetValidationModel>
}

export interface SheetValidationModel {
    headers: Array<any>;
    errors: Array<RowValidationModel>
    warnings: Array<RowValidationModel>
    headerValid: boolean;
    valid: boolean;
}

export interface RowValidationModel {
    row: number;
    violations: Array<FieldValidationModel>
}

export interface FieldValidationModel {
    field: string;
    value: string;
    violation: string;
}
