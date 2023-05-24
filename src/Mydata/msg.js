import '../Chat/Chat.css';
function GetMsg({msg,h,m}){

return(
<>
<div id="speech-bubble"> <div id="writeright">{msg}</div>
<div id="Clock2">{h}:{m}</div>
</div>
</>
);
}
export default GetMsg;