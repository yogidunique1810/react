import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const SingleProduct = ({singleProduct,updateCart,action}) => {
    
    return(
        <>
            <div className='col-xs-12 col-md-6 col-lg-4 col-xl-3' >
            <Card style={{ width: '18rem',marginBottom:'30px' }}>
            <Card.Img variant="top" src={singleProduct.image} width={'100px'} height={'180px'} />
            <Card.Body>
                <Card.Title style={{maxHeight:'25px', overflow:'hidden'}}>{singleProduct.title}</Card.Title>
                <Card.Text style={{maxHeight:'100px', overflow:'hidden'}}>
                {singleProduct.description}
                </Card.Text>
                <Card.Text>
                <b>{singleProduct.price} ({singleProduct.category})</b>
                </Card.Text>
                
            </Card.Body>
            <Card.Footer style={{textAlign:"center"}}>
            <Button variant="primary" onClick={()=>updateCart(singleProduct)}>{action==="add"?"Add to":"Remove from"} Cart</Button>
            </Card.Footer>
            </Card>
        </div>
        </>
    )
}

export default SingleProduct