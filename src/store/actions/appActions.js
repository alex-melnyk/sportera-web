import * as Types from "../types";

export const showAlert = (message) => ({
    type: Types.ACTION_SHOW_ALERT,
    message
});