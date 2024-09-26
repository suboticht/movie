import { Film } from "@/app/page";
import axiosInstance from "./axiosConfig";
import { AxiosResponse } from "axios";

const getMovieData = async(slug:string): Promise<any> => {
    
    try {
        const response: AxiosResponse<any> = await axiosInstance.get(`phim/${slug}`, {
            params: {
                
            }
        })
        return response.data
    } catch (err) {
        console.log(err);
        
    }
} 

export default getMovieData