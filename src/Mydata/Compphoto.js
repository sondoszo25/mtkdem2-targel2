import './contacts.css';





function Compphoto({name:name,img:img}) {


    return (
        <>
            <img src={img} className="rounded-circle imageid"></img><span id="chatme">{name}</span>
        </>
    )
}
export default Compphoto;


