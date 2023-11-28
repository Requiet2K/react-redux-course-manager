import {Stack, TextField, Typography, Button, Box} from "@mui/material"
import {useSelector, useDispatch} from "react-redux";
import { store } from "../store/store";
import { changeName,changeDescription,changeCost } from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";

type RootState = ReturnType<typeof store.getState>;

function CourseForm() {

  const {name, description, cost} = useSelector((store: RootState) => store.form);
  const ourDispatch = useDispatch();

  console.log(name, description, cost);

  const handleSubmit = () => {
    ourDispatch(addCourse({name,description,cost}));
  }

  return (
    <Box sx={{width:"75%", margin:"50px auto", backgroundColor: "whitesmoke", padding:"50px", borderRadius: "25px", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",}}>
      <Box sx={{width: "75%", margin:"auto"}}>
        <Typography variant="h4" component="h4" sx={{marginBottom: "25px"}}>Add Course</Typography>
        <Stack direction={{xs:"column", xl:"row"}} spacing={4} sx={{marginRight: "0px"}}>
          <Stack direction={{xs:"column", sm:"row"}} spacing={1} justifyContent={{sm:"space-between"}}>
            <Typography variant="h6" component="h6" sx={{display: "flex", alignItems:"center", width:{sm:"30%",xl:"25%"}}}>Name</Typography>
            <TextField value={name} size="small" sx={{width:{sm:"70%",xl:"100%"}}} onChange={(event)=>ourDispatch(changeName(event.target.value))}/>
          </Stack>
          <Stack direction={{xs:"column", sm:"row"}} spacing={1} justifyContent={{sm:"space-between"}}>
            <Typography variant="h6" component="h6" sx={{display: "flex", alignItems:"center", width:{sm:"30%",xl:"40%"}}}>Description</Typography>
            <TextField value={description} size="small" sx={{width:{sm:"70%",xl:"100%"}}} onChange={(event)=>ourDispatch(changeDescription(event.target.value))}/>
          </Stack>
          <Stack direction={{xs:"column", sm:"row"}} spacing={1} justifyContent={{sm:"space-between"}}>
            <Typography variant="h6" component="h6" sx={{display: "flex", alignItems:"center", width:{sm:"30%",xl:"20%"}}}>Cost</Typography>
            <TextField value={cost ?? ''} type="number" size="small" sx={{width:{sm:"70%",xl:"100%"}}} onChange={(event)=>ourDispatch(changeCost(parseInt(event.target.value)))}/>
          </Stack>
          <Button variant="contained" color="success" onClick={handleSubmit}>Save</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default CourseForm
