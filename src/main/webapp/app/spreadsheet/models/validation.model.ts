export interface WorkbookValidationModel {
    valid: boolean;
    validations: Map<string, SheetValidationModel>
}

export interface SheetValidationModel {
    headers: Array<HeaderValidationModel>;
    errors: Array<RowValidationModel>
    warnings: Array<RowValidationModel>
    headerValid: boolean;
    valid: boolean;
}

export interface RowValidationModel extends FieldValidationModel{
    row: number;
}

export interface HeaderValidationModel extends FieldValidationModel {
    column: number;
}

export interface FieldValidationModel {
    field: string;
    value: string;
    violation: string;
}
