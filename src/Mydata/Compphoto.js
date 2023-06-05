import './contacts.css';





function Compphoto({name,img}) {


    return (
        <>
            <img src={img} alt="img" className="rounded-circle imageid"></img><span id="chatme" alt="img">{name}</span>
        </>
    )
}
export default Compphoto;


