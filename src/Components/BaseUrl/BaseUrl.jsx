export const BaseUrl = "https://ginno-devi-car-rental.vercel.app/api/v1";

export const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
};
