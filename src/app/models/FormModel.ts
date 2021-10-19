export interface FormModel<T extends string> {
  formId: string;
  formField: Record<T, FormField<T>>;
}

export interface FormField<T> {
  name: T;
}
