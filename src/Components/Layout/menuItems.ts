import { useTranslation } from "react-i18next"

export const useMenuItems = () => {
    const { t } = useTranslation()

    const menu = [
        {
            path: '/dashboard',
            text: t("menu.dashboard")
        },
        {
            path: '/level',
            text: t("menu.level")
        }
    ]

    return menu
}