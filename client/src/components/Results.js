import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography,IconButton } from '@material-ui/core';
import { Pagination } from "@material-ui/lab";
import {Favorite} from "@material-ui/icons";
import data from '../Data';
import StarRateIcon from '@material-ui/icons/StarRate';
import { useEffect, useState } from 'react';

function Results(){
    const [currentPage,setCurrentPage]=useState(1);
    const [pages,setPages]=useState([]);
    const pageSize=12;
    const [currentData,setCurrentData]=useState([]);
    
    useEffect(()=>{
        setCurrentData(data.slice((currentPage-1)*pageSize,currentPage*pageSize));
    },[currentPage]);

    useEffect(()=>{
        setPages(()=>{
            const pageNumbers=[];
            for(let i=1;i<=Math.ceil(data.length/pageSize);i++){
            pageNumbers.push(i);
            }
            return pageNumbers;
        });
    },[])
    // console.log(pages);
    
    return(
        <div>
        <div className="results" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"10px 0 50px 55px"}}>
        {currentData.map((item,index)=>{
          return (<Card key={index} style={{maxWidth:"435px",margin:"60px 50px 0 0"}} elevation={10}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <CardHeader title={item.name} subheader={item.city}/>
          <div style={{display:"flex",marginRight:"10px"}}>
                    <StarRateIcon />
                    <Typography variant="body1" >{item.star[0]}</Typography>      
                </div>
          </div>
          <CardMedia 
          component="img"
          image={item.image} 
          title="Hotel Image"
          style={{height:"300px",maxWidth:"435px"}}    
          />
          <CardContent>
            <div className="details" style={{display:"flex",justifyContent:"space-between"}}>
              <div>
                <Typography variant="body1">{item.type}</Typography>
                <Typography variant="body2">{item.area}</Typography>
              </div>
              <div>
                <Typography variant="h6">₹{item.price}</Typography>
              </div>
            </div>
          </CardContent>
          <CardActions style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <IconButton >
              <Favorite />
              </IconButton>
              <a href={item.url} style={{textDecoration:"none"}}><Button color="secondary" variant="outlined">View</Button></a>
          </CardActions>
      </Card>);  
        })}
        </div>
        <div style={{display:"flex",justifyContent:"center",margin:"10px 0 50px 0"}}>
        <Pagination count={pages.length} page={currentPage} onChange={(event,value)=>setCurrentPage(value)} color="primary" size="large"/>
        </div>
    </div>
    );
}

export default Results;