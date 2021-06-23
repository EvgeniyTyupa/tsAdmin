import { useTranslation } from "react-i18next"

export const useProfileFormFields = () => {
    const { t } = useTranslation()

    const profileFields = [
        {
            label: t("profile.form.firstName"),
            name: "first_name"
        },
        {
            label: t("profile.form.lastName"),
            name: "last_name"
        },
        {
            label: t("profile.form.email"),
            name: "email"
        },
        {
            label: t("profile.form.mobile"),
            name: "mobile"
        },
        {
            label: t("profile.form.phone"),
            name: "phone"
        },
        {
            label: t("profile.form.job"),
            name: "job"
        }
    ]

    return profileFields
}