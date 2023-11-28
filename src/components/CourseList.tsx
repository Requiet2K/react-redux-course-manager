import {Stack, Typography, Button, Box} from "@mui/material"
import {useDispatch, useSelector} from "react-redux";
import {removeCourse} from "../store/slices/courseSlice"
import {formatedState, formState } from "../propsTypes/courseState";

function CourseList() {

  const {values} = useSelector(({courses:{data,searchTerm}}) => {
    const filteredCourses = data.filter(
      (course:formState) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return {
        values:filteredCourses
      }
  });

  const ourDispatch = useDispatch();

  const components = values.map((item:formatedState) => {
      return(
        <Box sx={{width:"75%", margin:"25px auto", backgroundColor: "whitesmoke", padding:"25px 50px", borderRadius: "25px", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",}}>
          <Stack spacing={1} justifyContent="center" alignItems="center" key={item.id}>
            <Typography variant="h5" component="h5">{item.name}</Typography>
            <Typography variant="body1" component="span">{item.description}</Typography>
            <Typography variant="body1" component="span">{item.cost}</Typography>
            <Button variant="contained" color="error" onClick={()=>ourDispatch(removeCourse(item.id))}>Delete</Button>
          </Stack>
        </Box>
      )
    })

  return (
    <>
      {components}
    </>
  )
}

export default CourseList
