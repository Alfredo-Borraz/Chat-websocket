import React,{useState, useEffect, useRef} from 'react'
import css from '../assets/css/PostCreate.css'
import Post from "../components/post";
import socket from "../components/socket";
import img1 from "../assets/imagenes/puestaSol.jpg"
import img2 from "../assets/imagenes/Foto1.jpg"
import img3 from "../assets/imagenes/foto2.jpg"
import img4 from "../assets/imagenes/foto3.jpg"
import img5 from "../assets/imagenes/foto4.jpg"
import img6 from "../assets/imagenes/foto5.jpg"




const feed = ({nombre}) => {



    const [publicacion, setPublicacion] = useState("");
    const [publicaciones, setPublicaciones] = useState([]);
    const [imagen, setImagen] = useState("");
    useEffect(()=>{
        socket.on('connection',()=>{
           console.log('conexion exitosa')
       })},[nombre]);

    useEffect(()=>{
        //guarda las publicaciones enviadas desde el servidor en el array
        socket.on("publicaciones", (publicacion)=>{
            setPublicaciones([...publicaciones, publicacion]);
            console.log('holas')
        });
        return () =>{
            socket.off();
        };

    }, [publicaciones]);

  const submit = (e) =>{
      //se enviara los datos que el usuario haya puesto para la publicacion
      e.preventDefault();
      socket.emit("publicacion",nombre, publicacion, imagen);
      setPublicacion("");
      setImagen("");

    }

function selectImage (id, e){
    e.preventDefault();
      alert(id);
      setImagen(id);
    }


        return(
            <div className='container-fluid'>
            <div id="container fondo">
                <h1 id="titulo">Chat</h1>
                <div id="borde">
                    <textarea  id="inputPost" name="comentarios"  placeholder="Escribe un mensaje aquí..."
                               value ={publicacion}
                    onChange={(e)=>setPublicacion(e.target.value)}></textarea>
                    <div className="alert " id="infoColor" role="alert" >
                        Selecciona la foto a enviar
                    </div>
                    <div className="col-sm-4 col-md-2 col-lg-2 imagenes" id="imagenes" >
                        <img src={img1} id="img1" width="150"height="150" onClick={(e) =>selectImage(img1, e)}/>
                        <img src={img2} id="img2" width="150"height="150" onClick={(e) =>selectImage(img2, e)}/>
                        <img src={img3} id="img3" width="150"height="150" onClick={(e) =>selectImage(img3, e)}/>
                        <img src={img4} id="img4" width="150"height="150" onClick={(e) =>selectImage(img4, e)}/>
                        <img src={img5} id="img5" width="150"height="150" onClick={(e) =>selectImage(img5, e)}/>
                        <img src={img6} id="img6" width="150"height="150" onClick={(e) =>selectImage(img6, e)}/>
                    </div>
                    <button id="botonEnviar" onClick={submit}>Enviar</button>

                </div>

            </div>
                <div id = "FondoCard">
                <div className ="container">
                    <div className="row">
                        <div className="col-3">
                        </div>
                        <div className="col-6">
                        {publicaciones.map((e, i)=>(
                            <Post key ={i} nombre ={e.nombre} publicacion={e.publicacion} imagen={e.imagen} />
                        ))}
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }


export default  feed;