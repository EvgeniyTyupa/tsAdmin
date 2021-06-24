import { AreaChartOutlined, BarChartOutlined, CalendarOutlined, CarOutlined, ClusterOutlined, CreditCardOutlined, CrownOutlined, InboxOutlined, OrderedListOutlined, PhoneOutlined, PieChartOutlined, QuestionCircleOutlined, RiseOutlined, ScheduleOutlined, SettingOutlined, SmileOutlined, SnippetsOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons"
import { useTranslation } from "react-i18next"

export const useMenuItems = () => {
    const { t } = useTranslation()

    const menu = [
        {
            title: "",
            items: [
                {
                    id: 'dashboard',
                    path: '/dashboard',
                    text: t("menu.dashboard"),
                    icon: AreaChartOutlined
                },
            ]
        },
        {
            title: "BILLING",
            items: [
                {
                    id: 'profile',
                    path: '/profile',
                    text: "Account",
                    icon: UserOutlined
                },
                {
                    id: 'transactions',
                    path: '/transactions',
                    text: "Transactions",
                    icon: RiseOutlined
                },
                {
                    id: 'gateways',
                    path: '/gateways',
                    text: "Gateways",
                    icon: ClusterOutlined
                },
                {
                    id: 'cards',
                    path: '/bank_cards',
                    text: "Bank Cards",
                    icon: CreditCardOutlined
                },
            ]
        },
        {
            title: "PROMOTION",
            items: [
                {
                    id: 'offers',
                    path: '/offers',
                    text: "Offers",
                    icon: InboxOutlined
                },
                {
                    id: 'events',
                    path: '/events',
                    text: "Events",
                    icon: CalendarOutlined
                },
                {
                    id: 'audiences',
                    path: '/audiences',
                    text: "Audiences",
                    icon: PhoneOutlined
                },
                {
                    id: 'onboardings',
                    path: '/onboardings',
                    text: "Onboardings",
                    icon: ScheduleOutlined
                },
            ]
        },
        {
            title: "MANAGMENT",
            items: [
                {
                    id: 'users',
                    path: '/users',
                    text: "Users",
                    icon: TeamOutlined
                },
                {
                    id: 'tenants',
                    path: '/tenants',
                    text: "Tenants",
                    icon: SmileOutlined
                },
                {
                    id: 'analytics',
                    path: '/analytics',
                    text: "Analytics",
                    icon: PieChartOutlined
                },
            ]
        },
        {
            title: "CONTENT",
            items: [
                {
                    id: 'levels',
                    path: '/levels',
                    text: "Levels",
                    icon: BarChartOutlined
                },
                {
                    id: 'floors',
                    path: '/floors',
                    text: "Floors",
                    icon: OrderedListOutlined
                },
                {
                    id: 'documents',
                    path: '/documents',
                    text: "Documents",
                    icon: SnippetsOutlined
                },
                {
                    id: 'parking',
                    path: '/parking_spots',
                    text: "Parking Spots",
                    icon: CarOutlined
                },
                {
                    id: 'questions',
                    path: '/questionnaires',
                    text: "Questionnaires",
                    icon: QuestionCircleOutlined
                },
            ]
        },
        {
            title: "SYSTEM",
            items: [
                {
                    id: 'administrators',
                    path: '/administrators',
                    text: "Administators",
                    icon: CrownOutlined
                },
                {
                    id: 'notifications',
                    path: '/notifications',
                    text: "Notifications",
                    icon: SmileOutlined
                },
                {
                    id: 'settings',
                    path: '/settings',
                    text: "Settings",
                    icon: SettingOutlined
                },
            ]
        },
    ]

    return menu
}