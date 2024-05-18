import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWVhYjBhMGExODIxYzU3NGFkMTM5MmNkYmRlMWFmNCIsInN1YiI6IjY2MjRiZjg1MjIxYmE2MDE2MzEzMjFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bOpwCIzf6BYsNxomOsfXQEbhi2K8a2ma6riHnSKFuvg',
    }
})

export default instance;