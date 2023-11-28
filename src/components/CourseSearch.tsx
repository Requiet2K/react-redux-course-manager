import {Stack, Typography, TextField} from "@mui/material"
import {useDispatch, useSelector} from "react-redux";
import { store } from "../store/store";
import { searchCourse } from "../store/slices/courseSlice";

type RootState = ReturnType<typeof store.getState>; 

function CourseSearch() {

  const searchTerm = useSelector(
    (store:RootState) =>{return store.courses.searchTerm} );

  const ourDispatch = useDispatch();

  return (
    <Stack direction={{xs:"column",sm:"row"}} justifyContent="space-between" 
    sx={{width:"75%", margin:"10px auto", padding:"10px 50px"}}>
      <Typography variant="h4" component="h4">Courses</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography>Search</Typography>
        <TextField size="small" value={searchTerm} 
        onChange={(event)=>ourDispatch(searchCourse(event.target.value))}
        sx={{width:{xs:"100%"}, marginTop:{xs:"25px!important",sm:"0px!important"}}}/>
      </Stack>
    </Stack>
  )
}

export default CourseSearch
