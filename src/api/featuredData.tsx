import { Film } from "@/app/page";
import axiosInstance from "./axiosConfig";
import { AxiosResponse } from "axios";

const featuredData = async(slug:string, page:number = 1, limit:number=8): Promise<Film[] | undefined> => {
    
    try {
        const response: AxiosResponse<Film[]> = await axiosInstance.get(`danh-sach/${slug}`, {
            params: {
                page: page,
                limit: limit
            }
        })
        return response.data
    } catch (err) {
        console.log(err);
        
    }
} 

export default featuredData