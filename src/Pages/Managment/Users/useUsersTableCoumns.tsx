import { DeleteFilled, EyeFilled } from "@ant-design/icons"
import { Avatar, Button } from "antd"
import { NavLink } from "react-router-dom"
import { ManagmentUser } from "../../../Redux/Managment/Users/usersTypes"
import { getTimeByTimeZone } from "../../../Utils/timezone"

export const useUsersTableColumns = (
        handleOpenDeleteModal: (user: ManagmentUser | null) => void
    ) => {
    const columns = [
        {
            title: "Avatar",
            key: "avatar",
            render: (payload: ManagmentUser) => {
                return <Avatar src={payload.avatar}/>
            }
        },
        {
            title: "First Name",
            key: "first_name",
            render: (payload: ManagmentUser) => {
                return <NavLink to={`/users/${payload.id}`}>{payload.first_name}</NavLink>
            }
        },
        {
            title: "Last Name",
            dataIndex: 'last_name',
            key: "last_name"
        },
        {
            title: "Email",
            dataIndex: 'email',
            key: "email"
        },
        {
            title: "Points",
            dataIndex: 'points',
            key: "points"
        },
        {
            title: "Spent",
            dataIndex: 'points_spent',
            key: "points_spent"
        },
        {
            title: "Verified",
            key: "is_verified",
            render: (payload: ManagmentUser) => {
                return <span>{payload.is_verified ? "Yes" : "No"}</span>
            }
        },
        {
            title: "Level",
            key: "name",
            render: (payload: ManagmentUser) => {
                return <span>{payload.level.name}</span>
            }
        },
        {
            title: "Last Activity",
            key: "last_visited_at",
            render: (payload: ManagmentUser) => {
                return <span>{getTimeByTimeZone(payload.last_visited_at)}</span>
            }
        },
        {
            title: "Actions",
            key: "actions",
            render: (payload: ManagmentUser) => {
                return(
                    <>
                        <Button danger onClick={() => handleOpenDeleteModal(payload)}>
                            <DeleteFilled/>
                        </Button>

                    </>
                )
            }
        }
    ]
    return columns
}