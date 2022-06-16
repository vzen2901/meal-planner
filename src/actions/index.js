export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

// export const addRecipe = {
//     type: ADD_RECIPE,//thuộc tính là hằng số, thay vì string
//     recipe,
//     day,
//     meal,
// }
// action là đối tượng thuần túy -> không có tính di động
//->action dễ di chuyển, dễ kiểm tra
//->bao bọc action trong function -> trình tạo action
// action này không tự sửa state, cập nhật state
export function addRecipe({day, recipe, meal}) {
    return {
       type: ADD_RECIPE,
       recipe,
       day,
       meal,
    }
}
export function removeFromCalendar({day, meal}) {
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal,
    }
}