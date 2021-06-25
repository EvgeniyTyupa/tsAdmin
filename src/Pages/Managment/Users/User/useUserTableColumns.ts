export const useUserTableColumns = () => {
    const columns = [
        {
            title: "Tenant Name",
            key: "tenant_name"
        },
        {
            title: "Purchase ID",
            key: "purchase_id"
        },
        {
            title: "Item Category",
            key: "item_category"
        },
        {
            title: "Amount GEL",
            key: "amount"
        },
        {
            title: "Aquired Points",
            key: "aquired_points"
        },
        {
            title: "Spent points",
            key: "spent_points"
        },
        {
            title: "Cashbak at the time of purchase",
            key: "cashback"
        },
        {
            title: "Return available",
            key: "availabl"
        },
    ]
    return columns
}