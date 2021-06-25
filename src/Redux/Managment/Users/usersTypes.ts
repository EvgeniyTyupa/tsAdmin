import { Level } from "../../Level/levelTypes";

export interface ManagmentUser {
    id: string
    level_id: string
    avatar: string
    email: string
    first_name: string
    last_name: string
    phone: string
    gender: string
    birthday: string | null
    points: number
    points_spent: number
    is_active: boolean
    is_verified: boolean
    created_at: string
    updated_at: string
    last_visited_at: string
    level: Level
}
