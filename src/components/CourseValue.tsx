import {Stack, Typography, Divider, Box} from "@mui/material"
import {useSelector} from "react-redux";
import {formState, formatedState } from "../propsTypes/courseState";

function CourseValue() {

  const totalCost = useSelector(({courses:{data,searchTerm}}) => {
    return data.filter((course:formState) => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .reduce((acc:number,course:formatedState)=>acc+course.cost,0);
  });

  return (
    <Box>
      <Divider/>
      <Stack alignItems="end" sx={{width:"75%", margin:"25px auto", padding:"10px 50px"}}>
      <Typography variant="h5" component="h5">Total: {totalCost}$</Typography> 
      </Stack>
    </Box>
  )
}

export default CourseValue;
