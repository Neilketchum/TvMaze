import axios from "axios"

export const  getByShowName = async (searchString) => {
  
    const data = await axios.get("https://api.tvmaze.com/search/shows?q="+searchString);
    if(data!=null){
        return data.data
    }
}
export const  getMoviesByActorName = async () => {

}




