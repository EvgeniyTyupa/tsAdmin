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
            title: t("menu.billing.title"),
            items: [
                {
                    id: 'profile',
                    path: '/profile',
                    text: t("menu.billing.account"),
                    icon: UserOutlined
                },
                {
                    id: 'transactions',
                    path: '/transactions',
                    text: t("menu.billing.transactions"),
                    icon: RiseOutlined
                },
                {
                    id: 'gateways',
                    path: '/gateways',
                    text: t("menu.billing.gateways"),
                    icon: ClusterOutlined
                },
                {
                    id: 'cards',
                    path: '/bank_cards',
                    text: t("menu.billing.cards"),
                    icon: CreditCardOutlined
                },
            ]
        },
        {
            title: t("menu.promotion.title"),
            items: [
                {
                    id: 'offers',
                    path: '/offers',
                    text: t("menu.promotion.offers"),
                    icon: InboxOutlined
                },
                {
                    id: 'events',
                    path: '/events',
                    text: t("menu.promotion.events"),
                    icon: CalendarOutlined
                },
                {
                    id: 'audiences',
                    path: '/audiences',
                    text: t("menu.promotion.audiences"),
                    icon: PhoneOutlined
                },
                {
                    id: 'onboardings',
                    path: '/onboardings',
                    text: t("menu.promotion.onboardings"),
                    icon: ScheduleOutlined
                },
            ]
        },
        {
            title: t("menu.managment.title"),
            items: [
                {
                    id: 'users',
                    path: '/users',
                    text: t("menu.managment.users"),
                    icon: TeamOutlined
                },
                {
                    id: 'tenants',
                    path: '/tenants',
                    text: t("menu.managment.tenants"),
                    icon: SmileOutlined
                },
                {
                    id: 'analytics',
                    path: '/analytics',
                    text: t("menu.managment.analytics"),
                    icon: PieChartOutlined
                },
            ]
        },
        {
            title: t("menu.content.title"),
            items: [
                {
                    id: 'levels',
                    path: '/levels',
                    text: t("menu.content.levels"),
                    icon: BarChartOutlined
                },
                {
                    id: 'floors',
                    path: '/floors',
                    text: t("menu.content.floors"),
                    icon: OrderedListOutlined
                },
                {
                    id: 'documents',
                    path: '/documents',
                    text: t("menu.content.documents"),
                    icon: SnippetsOutlined
                },
                {
                    id: 'parking',
                    path: '/parking_spots',
                    text: t("menu.content.parking"),
                    icon: CarOutlined
                },
                {
                    id: 'questions',
                    path: '/questionnaires',
                    text: t("menu.content.questions"),
                    icon: QuestionCircleOutlined
                },
            ]
        },
        {
            title: t("menu.system.title"),
            items: [
                {
                    id: 'administrators',
                    path: '/administrators',
                    text: t("menu.system.admins"),
                    icon: CrownOutlined
                },
                {
                    id: 'notifications',
                    path: '/notifications',
                    text: t("menu.system.notifications"),
                    icon: SmileOutlined
                },
                {
                    id: 'settings',
                    path: '/settings',
                    text: t("menu.system.settings"),
                    icon: SettingOutlined
                },
            ]
        },
    ]

    return menu
}