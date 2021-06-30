export const useOffersClaimedTableColumns = () => {
    const columns = [
        {
            title: "Offer Name",
            key: "name"
        },
        {
            title: "Offer ID",
            key: "id"
        },
        {
            title: "Offer Provider",
            key: "provider"
        },
        {
            title: "Spent Points",
            key: "spent_points"
        },
        {
            title: "Aquired Points",
            key: "aquired_points"
        },
        {
            title: "Active / Past",
            key: "active_past"
        }
    ]
    return columns
}