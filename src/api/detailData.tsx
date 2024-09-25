import { Film } from "@/app/page";
import axiosInstance from "./axiosConfig";
import { AxiosResponse } from "axios";

const detailData = async(slug:string): Promise<Film[] | undefined> => {
    
    try {
        const response: AxiosResponse<Film[]> = await axiosInstance.get(`phim/${slug}`)
        return response.data
    } catch (err) {
        console.log(err);
        
    }
} 

export default detailData