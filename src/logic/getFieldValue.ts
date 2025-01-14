import getRadioValue from './getRadioValue';
import getMultipleSelectValue from './getMultipleSelectValue';
import isRadioInput from '../utils/isRadioInput';
import isCheckBox from '../utils/isCheckBoxInput';
import isUndefined from '../utils/isUndefined';
import { FieldsObject, FieldValue, Ref, FieldValues } from '../types';

export default function getFieldValue<Data extends FieldValues>(
  fields: FieldsObject<Data>,
  ref: Ref,
): FieldValue {
  const { type, name, options, checked, value } = ref;
  if (isRadioInput(type)) {
    const field = fields[name];
    return field ? getRadioValue(field.options).value : '';
  }

  if (type === 'select-multiple') return getMultipleSelectValue(options);

  if (isCheckBox(type)) {
    if (checked) {
      return ref.attributes && ref.attributes.value
        ? isUndefined(value)
          ? true
          : value
        : true;
    }
    return false;
  }

  return value;
}
