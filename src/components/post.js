import React from 'react'
import css from "../assets/css/post.css"
import img1 from "../assets/imagenes/puestaSol.jpg"
import img2 from "../assets/imagenes/Foto1.jpg"
import img3 from "../assets/imagenes/foto2.jpg"
import img4 from "../assets/imagenes/foto3.jpg"
import img5 from "../assets/imagenes/foto4.jpg"
import img6 from "../assets/imagenes/foto5.jpg"
import corazon from "../assets/SVG/favorite_border_white_24dp.svg"
import comentario from "../assets/SVG/chat_bubble_white_24dp.svg"
class post extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <React.Fragment>
                <div className = "row">
                    <div className="col" >
                    <div className="card"  >
                        <div className="card-body">
                            <h5 className="card-title">{this.props.nombre}</h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-muted">{this.props.publicacion}</small></p>
                        </div>
                        <img src={this.props.imagen} className="card-img-bottom" width="200" height="200"/>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )


    }
}
export default post;