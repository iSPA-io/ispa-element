import type { InjectionKey } from 'vue'
import type { Emitter } from 'mitt'
import type {
  FieldErrorList,
} from 'async-validator'

export interface IFormContext {
  formMitt: Emitter
  emit: (evt: string, ...args: any[]) => void
  inline?: boolean
  model?: Record<string, unknown>
  size?: string
  showMessage?: boolean
  labelPosition?: string
  labelWidth?: string
  rules?: Record<string, unknown>
  statusIcon?: boolean
  hideRequiredAsterisk?: boolean
  disabled?: boolean
}

export interface ValidateFieldCallback {
  (message?: string, invalidFields?: FieldErrorList): void
}

export interface IFormItemContext {
  prop?: string
  formItemMitt: Emitter
  size: ComponentSize
  validateState: string
  validate(trigger?: string, callback?: ValidateFieldCallback): void
  updateComputedLabelWidth(width: number): void
  addValidateEvents(): void
  removeValidateEvents(): void
  resetField(): void
  clearValidate(): void
}

// TODO: change it to symbol
export const IFormKey: InjectionKey<IFormContext> = 'iForm' as any

export const IFormItemKey: InjectionKey<IFormItemContext> = 'iFormItem' as any

export const iFormEvents = {
  addField: 'i.form.addField',
  removeField: 'i.form.removeField',
} as const
