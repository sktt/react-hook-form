import { ValidationMode } from './types';

export const DATE_INPUTS = [
  'date',
  'time',
  'month',
  'datetime',
  'datetime-local',
  'week',
];

export const STRING_INPUTS = [
  'text',
  'email',
  'password',
  'search',
  'tel',
  'url',
  'textarea',
];

export const VALIDATION_MODE: ValidationMode = {
  onBlur: 'onBlur',
  onChange: 'onChange',
  onSubmit: 'onSubmit',
};
