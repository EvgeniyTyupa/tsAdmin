import { LevelFormValues } from "../../Components/Level/LevelForm";

export const typezeLevel = (data: LevelFormValues) => {
    let color = data.color
    let name = data.name
    let description = data.description
    let cashback_parking = Number(data.cashback_parking)
    let real_spent_start = Number(data.real_spent_start)
    let real_spent_end = Number(data.real_spent_end)
    let display_spent_start = Number(data.display_spent_start)
    let display_spent_end = Number(data.display_spent_end)

    let level = {
        color, name, 
        description, 
        cashback_parking, 
        real_spent_start, 
        real_spent_end,
        display_spent_start,
        display_spent_end
    }

    return level
}