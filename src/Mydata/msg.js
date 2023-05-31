import '../Chat/Chat.css';
import { lastlogin2 } from '../Signin/Signin.js';

function GetMsg({ content, created, sender, id }) {
    var name=sender.username;
    return (
        <>
              { (name === lastlogin2  &&
                    <div id="speech-bubble"> <div id="writeright">{content}</div>
                        <div id="Clock2">{created}</div>
                    </div>
                )}
             

                   { (name !== lastlogin2 &&
                        <div id="speech-bubbler"> <div id="writeright">{content}</div>
                            <div id="Clock2">{created}</div>
                        </div>
                    
                    )}


                   

        </>
    );
}
export default GetMsg;