import { useTranslation } from "react-i18next"

export const useMenuItems = () => {
    const { t } = useTranslation()

    const menu = [
        {
            id: 'dashboard',
            path: '/dashboard',
            text: t("menu.dashboard")
        },
        {
            id: 'level',
            path: '/level',
            text: t("menu.level")
        }
    ]

    return menu
}