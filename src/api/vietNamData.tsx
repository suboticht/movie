import { Film } from "@/app/page";
import axiosInstance from "./axiosConfig";
import { AxiosResponse } from "axios";

const vietNamData = async(slug:string, page:number = 1, limit:number): Promise<any> => {
    
    try {
        const response: AxiosResponse<any> = await axiosInstance.get(`v1/api/quoc-gia/${slug}`, {
            params: {
                page: page,
                limit: limit
            }
        })
        return response.data?.data
    } catch (err) {
        console.log(err);
        
    }
} 

export default vietNamData