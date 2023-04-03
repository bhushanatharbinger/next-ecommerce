import { level,language,topic } from "../data/courses-filters"
export const getAllFilters = ()=>{
    // database logic to get data in here
    return {
        level,language,topic
    }
}