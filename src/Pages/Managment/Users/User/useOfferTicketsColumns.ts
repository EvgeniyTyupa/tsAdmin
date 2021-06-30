export const useOfferTicketsColumns = () => {
    const columns = [
        {
            title: "Ticket Name",
            key: "name"
        },
        {
            title: "Offer ID",
            key: "id"
        },
        {
            title: "Provider ID / Name",
            key: "provider"
        },
        {
            title: "Aquired Source",
            key: "aquired_source"
        },
        {
            title: "Ticket Active",
            key: "ticket_active"
        },
        {
            title: "Active Taken",
            key: "taken"
        }
    ]
    return columns
}