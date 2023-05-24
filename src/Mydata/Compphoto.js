import dimg from '../dimg.png'
import './contacts.css';





function Compphoto({name:name,img:img}) {


    return (
        <>
            <img src={img} class="rounded-circle imageid"></img><span id="chatme">{name}</span>
        </>
    )
}
export default Compphoto;


