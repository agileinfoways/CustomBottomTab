
export const TYPE_SAVE_SELECTED_SCREEN = "TYPE_SAVE_SELECTED_SCREEN"
export function saveSelectedScreen(data) {
    return {
        type: TYPE_SAVE_SELECTED_SCREEN,
        value: data
    }
}