import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography,IconButton, useTheme, useMediaQuery, Grid } from '@material-ui/core';
import { Pagination } from "@material-ui/lab";
import {Delete} from "@material-ui/icons";
// import data from '../Data';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteFavourite, getFavourite} from '../redux/actions/index';

function Favourite(){
    const theme=useTheme();
    const isMobile= useMediaQuery(theme.breakpoints.down("xs"));

    const [currentPage,setCurrentPage]=useState(1);
    const [pages,setPages]=useState([]);
    const pageSize=12;
    const [currentData,setCurrentData]=useState([]);
    const data= useSelector((state)=>state.favourites);
    const username=useSelector(state=>state.current);
    const dispatch= useDispatch();

    useEffect(()=>{
      dispatch(getFavourite(username));
    },[dispatch,username]);

    useEffect(()=>{
        setCurrentData(data.slice((currentPage-1)*pageSize,currentPage*pageSize));
    },[currentPage,data]);

    useEffect(()=>{
        setPages(()=>{
            const pageNumbers=[];
            for(let i=1;i<=Math.ceil(data.length/pageSize);i++){
            pageNumbers.push(i);
            }
            return pageNumbers;
        });
    },[data]);
    // console.log(pages);
    function handleDelete(uniq_id){
      dispatch(deleteFavourite({username,uniq_id}));
    }
    
    return(
        <div>
        <Typography variant={!isMobile?'h2':'h4'} style={{marginTop:"20px",textAlign:"center"}}>Favourites</Typography>
        <div className="results" style={{margin:"auto",width:"90%",marginTop:"20px"}}>
        <Grid container spacing={4}>
        {currentData.map((item,index)=>{
          return (
            <Grid item xs={12} sm={6} md={4} xl={2} key={index}>
            <Card style={{width:"100%"}} elevation={10}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <CardHeader title={item.property_name} subheader={item.city}/>
            <div style={{display:"flex",marginRight:"10px"}}>
                      <StarRateIcon />
                      <Typography variant="body1" >{item.hotel_star_rating[0]}</Typography>      
                  </div>
            </div>
            <CardMedia 
            component="img"
            image={item.image_urls.split(/[|]/)[0]} 
            title="Hotel Image"
            style={{height:"220px",width:"100%"}}    
            />
            <CardContent>
              <div className="details" style={{display:"flex",justifyContent:"space-between"}}>
                <div>
                  <Typography variant="body1">{item.room_type}</Typography>
                  <Typography variant="body2">{item.area}</Typography>
                </div>
                <div>
                  <Typography variant="h6">₹{item.Cost}</Typography>
                </div>
              </div>
            </CardContent>
            <CardActions style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <IconButton onClick={()=>handleDelete(item.uniq_id)}>
                <Delete />
                </IconButton>
                <a href={item.pageurl} style={{textDecoration:"none"}}><Button color="secondary" variant="outlined">View</Button></a>
            </CardActions>
      </Card>
      </Grid>);  
        })}
        </Grid>
        </div>
          <div style={{display:"flex",justifyContent:"center",margin:"30px 0 30px 0"}}>
          <Pagination count={pages.length} page={currentPage} onChange={(event,value)=>setCurrentPage(value)} color="primary" size="large"/>
          </div>
    </div>
    );
}

export default Favourite;