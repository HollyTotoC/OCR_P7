import { useParams, Navigate } from "react-router-dom"
import products from "../data/logements.json"

import Tags from "../components/Tags"
import Rating from "../components/Rating"
import Host from "../components/Host"
import Collapse from "../components/Collapse"
import Carrousel from "../components/Carrousel"

const SingleProduct = () => {
    //we get the product id from url
    const { productId } = useParams()
    const product = products.find((product) => product.id === productId);
    
    //we make sure that the product exist in the DB
    if (typeof product !== 'undefined') {
        const { title, location, rating, host, equipments, description, pictures } =
        product

        return (
            <div className="singleproduct" role="main">
                <Carrousel slides={pictures} />
                <div className="singleproduct__container">
                    <div className="singleproduct__info">
                        <h1 className="singleproduct__title">{title}</h1>
                        <p className="singleproduct__location">{location}</p>
                        <div className="singleproduct__tag">
                            {product.tags.map((tag, index) => ( <Tags key={index} htag={tag} />))}
                        </div>
                    </div>
                    <div className="singleproduct__idcard">
                        <Rating rating={rating} />
                        <Host host={host} />
                    </div>
                </div>
                <div className="singleproduct__dropdown">
                    <Collapse title="Description" content={description} />
                    <Collapse title="Équipements" content={equipments} />
                </div>
            </div>
        )
    } else {
        //If not in DB we redirect the user to the error page
        return (<Navigate to="/404" replace />)
    }
}

export default SingleProduct