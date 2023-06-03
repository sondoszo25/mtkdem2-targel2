import '../Chat/Chat.css';
import { lastlogin2 } from '../Signin/Signin.js';

function GetMsg({ content, created, sender, id }) {
    var name=sender.username;
    const time = new Date(created);
var hour=time.getHours();
 var min=time.getMinutes();
    return (
        <>
              { (name === lastlogin2  &&
                    <div id="speech-bubble"> <div id="writeright">{content}</div>
                        <div id="Clock2">{hour}:{min}</div>
                    </div>
                )}
             

                   { (name !== lastlogin2 &&
                        <div id="speech-bubbler"> <div id="writeright">{content}</div>
                            <div id="Clock2">{hour}:{min}</div>
                        </div>
                    
                    )}


                   

        </>
    );
}
export default GetMsg;