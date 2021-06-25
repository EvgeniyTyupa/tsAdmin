import TransactionsContainer from "../../Pages/Billing/Transactions/TransactionsContainer"
import LevelContainer from "../../Pages/Content/Level/LevelContainer"
import DashboardContainer from "../../Pages/Dashboard/DashboardContainer"
import AnalyticsContainer from "../../Pages/Managment/Analytics/AnalyticsContainer"
import UserContainer from "../../Pages/Managment/Users/User/UserContainer"
import UsersContainer from "../../Pages/Managment/Users/UsersContainer"
import ProfileContainer from "../../Pages/Profile/ProfileContainer"
import EventsContainer from "../../Pages/Promotion/Events/EventsContainer"
import OffersContainer from "../../Pages/Promotion/Offers/OffersContainer"

export const useAppRoutes = () => {
    const routes = [
        {
            path: "/dashboard",
            component: DashboardContainer,
            exact: false
        },
        {
            path: "/transactions",
            component: TransactionsContainer,
            exact: false
        },
        {
            path: "/offers",
            component: OffersContainer,
            exact: false
        },
        {
            path: "/events",
            component: EventsContainer,
            exact: false
        },
        {
            path: "/users",
            component: UsersContainer,
            exact: true
        },
        {
            path: "/users/:userId",
            component: UserContainer,
            exact: false
        },
        {
            path: "/analytics",
            component: AnalyticsContainer,
            exact: false
        },
        {
            path: "/levels",
            component: LevelContainer,
            exact: false
        },
        {
            path: "/profile",
            component: ProfileContainer,
            exact: false
        },
    ]

    return routes
}