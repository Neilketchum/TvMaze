
import {React,useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ByMovieName from './ByMovieName';
import ByActorName from './ByActorName';
import "./Main.css"
import {getByShowName,getMoviesByActorName} from './AxiosHelper';

const parameters = [
    {
        value: '0',
        label: 'Search by Actor Name'
    },
    {
        value: '1',
        label: 'Search by Movie Name',
    },
];

function Main() {
    const [searchParameter, setsearchParameter] = useState('0');
    const [searchString,setSearchString] =  useState("");
    const [data,setData] = useState([]);
    const handleChange = (event) => {
        setsearchParameter(event.target.value);
    };
    
    useEffect( () => {
      if(searchParameter === '1'){
        async function fetchData(){
            var response =  await getByShowName(searchString);
            setData(response)
        }
        fetchData()
      }else{

      }      
    }, [searchParameter,searchString])
    
    return (
        <div  >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                
            >
                <div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={searchParameter}
                        onChange={handleChange}
                        helperText="Please select  search Parameter"
                    >
                        {parameters.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField onChange={(e)=>{setSearchString(e.target.value)}} id="outlined-basic" label="Enter Search String" variant="outlined" />
                    {searchParameter==='1'?<ByMovieName  data={data} />:<ByActorName searchString={searchString}/>}
                </div>
            </Box>
            
        </div>
    )
}

export default Main