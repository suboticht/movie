import { Film } from "@/app/page";
import axiosInstance from "./axiosConfig";
import { AxiosResponse } from "axios";

const seriesData = async(slug:string, page:number = 1, limit:number): Promise<Film[] | undefined> => {
    
    try {
        const response: AxiosResponse<Film[]> = await axiosInstance.get(`v1/api/danh-sach/${slug}`, {
            params: {
                page: page,
                limit: limit
            }
        })
        return response.data.data
    } catch (err) {
        console.log(err);
        
    }
} 

export default seriesData