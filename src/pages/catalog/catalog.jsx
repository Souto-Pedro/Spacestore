import { products, categories } from './products';
import { Button, Grid, Typography } from "@mui/material";
import './catalog.css';
import { Link } from "react-router-dom";
import Carousel from "nuka-carousel/lib/carousel";

const Catalog = () => {
    return<div> 
            <Carousel >
   
   <img src="https://img.freepik.com/vetores-gratis/banner-com-astronauta-em-planeta-alienigena-e-nave-voadora_107791-6344.jpg?w=2000" style={{width: "100vw",  height:"500px"}}/>
   <img src="https://i.pinimg.com/736x/60/4a/dc/604adc90a7ba80ffc7457d7b8510fcbb.jpg"style={{width: "100vw",  height:"500px"}} />
   <img src="https://s.yimg.com/ny/api/res/1.2/eSiwYQJSlxV8su4tF11c7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MQ--/https://s.yimg.com/os/creatr-uploaded-images/2022-04/20e11c90-b9d1-11ec-adbf-ed6e9ef26e43"style={{width: "100vw",  height:"500px"}} />
   <img src="https://t4.ftcdn.net/jpg/04/54/06/97/360_F_454069727_rJvur6dkfgowIBpeI9IYERkboCG3uiHt.jpg"style={{width: "100vw",  height:"500px"}} />
</Carousel>


        <Grid container spacing={4} sx={{
        marginTop: '10px',
        paddingLeft: '32px',
        paddingRight: '32px',
        boxSizing: 'border-box'
    }}>
        {
            Object.keys(products).map(id => {
                return <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
                    
                    <img src={products[id].images[0]}/>

                    {
                        products[id].categories.map(categoryId => {
                            return <span className='category-label'>{categories[categoryId].name}</span>
                        })
                    }

                    <Typography variant="h5" component="h2">{products[id].name}</Typography>

                    {
                      products[id].promo_price ? <Typography variant="p" component="p" className="promo_price">{products[id].promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography> : ""
                    }
                    <Typography variant="p" component="p" className="price" style={{
                        fontSize: products[id].promo_price ? '16px' : '20px',
                        color: products[id].promo_price ? '#a9a9a9' : '#333333',
                        textDecoration: products[id].promo_price ? 'line-through' : 'none',
                    }}>{products[id].price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography>

                    <Typography variant="p" component="p">{products[id].description.substring(0, 100)}...</Typography>
                    <Link to={"../product/" + id}>
                        <Button fullWidth variant="contained">
                            Ver Produto
                        </Button>
                    </Link>
                </Grid>
            })
        }
    </Grid>
    </div>

}
export default Catalog;