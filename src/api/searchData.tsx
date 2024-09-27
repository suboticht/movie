import axiosInstance from "./axiosConfig";
import { AxiosResponse } from "axios";

const searchData = async(keywork:string, limit:number): Promise<any> => {
    
    try {
        const response: AxiosResponse<any> = await axiosInstance.get("v1/api/tim-kiem", {
            params: {
                keyword: keywork,
                limit: limit
            }
        })
        return response?.data?.data
    } catch (err) {
        console.log(err);
        
    }
} 

export default searchData