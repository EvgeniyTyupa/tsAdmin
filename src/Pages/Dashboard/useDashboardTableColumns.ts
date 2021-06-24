export const useDashboardTableColumns = () => {
    const columns = [
        {
            title: "ORDER N",
            key: "orderN"
        },
        {
            title: "Amount",
            key: "amount"
        },
        {
            title: "Provider",
            key: "provider"
        },
        {
            title: "Timer",
            key: "timer"
        },
        {
            title: "Status",
            key: "status"
        },
    ]
    return columns
}