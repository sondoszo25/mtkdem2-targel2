import '../Chat/Chat.css';
function GetMsg({content,created}){

return(
<>
<div id="speech-bubble"> <div id="writeright">{content}</div>
<div id="Clock2">{created}</div>
</div>
</>
);
}
export default GetMsg;