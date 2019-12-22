import {TABLE_CHECK} from './types';

export function updateTableCheck(isChecked) {
    return {
      type: TABLE_CHECK,
      checked: isChecked
    }
  }