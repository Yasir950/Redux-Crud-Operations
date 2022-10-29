import { openNotificationWithIcon } from "../toastComp";

export function textValidation(fieldName, fieldValue, lengthChar) {
    let error = false;
    if (
      fieldValue === undefined ||
      fieldValue === null ||
      fieldValue.trim().length < 1 ||
      fieldValue.trim() === ""
    ) {
      error = true;
      openNotificationWithIcon(
        "error",
        "Error",
        `${fieldName} is required`,
        false
      );
    } else if (lengthChar > 0 && fieldValue.trim().length < lengthChar) {
      error = true;
      openNotificationWithIcon(
        "error",
        "Error",
        `${fieldName} needs to be at least ${lengthChar} characters`,
        false
      );
    }
    return error;
  }