import React from "react";
import { Typography, Box, makeStyles,TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const useStyle = makeStyles ({
    stuListColor: {
        backgroundColor:orange[400],
        color: 'White'
    },
    tableHeadCell: {
        color: 'White',
        fontWeight: 'bold',
        fontSize: 16
    }
});

const View = () => {
    const  classes = useStyle();
    const { id } = useParams();
    const [student, setStudent] = useState([]);
    const history = useHistory();   
    useEffect(() => {
        async function getStudent() {
        try {
            const student = await axios.get(`http://localhost:3333/students/${id}`)
            // console.log(students.data,"uysatdfvbiyugcf");
            setStudent(student.data);
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
        getStudent();
    }, [id]);
    
    function handleClick() {
        history.push("/")
    }
    // console.log(id);
    return (
        <>
            <Box textAlign={"center"} p={2} className={classes.stuListColor}>
                <Typography variant="h4">Student Detail</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#616161"}}>
                            <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell align="center">{student.id}</TableCell>
                        <TableCell align="center">{student.stuname}</TableCell>
                        <TableCell align="center">{student.email}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box m={3} textAlign={"center"}>
                <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
            </Box>
        </>
    )
}

export default View