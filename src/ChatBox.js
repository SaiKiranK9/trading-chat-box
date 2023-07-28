import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

export function ChatBox() {
    return(
        <div>
            <div className='leftPaneDiv' style={{ borderBottom: '1px solid ', height: '60px' }}>
                <div className='leftPaneDiv' style={{ marginLeft: '10px', marginTop: '10px' }}>
                    <img src="https://i.imgur.com/KIPtISY.jpg" class="img-thumbnail userImage" alt="userPic" />
                    <div>
                        <h3 className='whiteColor' style={{
                            fontSize: '12px',
                            marginTop: '10px',
                            marginLeft: '5px'
                        }}>Rick Wright</h3>
                    </div>
                </div>
                <div className='leftPaneDiv' style={{ marginLeft: '765px' }}>
                    <div style={{ marginTop: '15px' }}><i class="bi bi-clock-fill" style={{ color: 'slategray' }}></i></div>
                    <i class="bi bi-three-dots-vertical" style={{
                        padding: '2px 1px 1px 1px',
                        background: '#2B3139',
                        marginLeft: '14px',
                        height: '30px',
                        marginTop: '10px'
                    }}></i>
                </div>
            </div>
            <div>
                <div style={{
                    color: 'white',
                    fontSize: '11px',
                    width: '400px',
                    background: '#2B3139',
                    margin: '10px',
                    borderRadius: '10px',
                    padding: '5px'
                }}>
                    <p>JavaScript is a light-weight programming language used for the World Wide Web. The JavaScript Date object is useful for checking the date and time a visitor arrives at your website.</p>
                </div>
                <div style={{
                    color: 'white',
                    fontSize: '11px',
                    width: '400px',
                    background: '#3861FB',
                    margin: '10px 0px 0px 500px',
                    borderRadius: '10px',
                    padding: '5px'
                }}>
                    <p>JavaScript is a light-weight programming language used for the World Wide Web. The JavaScript Date object is useful for checking the date and time a visitor arrives at your website.</p>
                </div>
                <div style={{
                    color: 'white',
                    fontSize: '11px',
                    width: '400px',
                    background: '#2B3139',
                    margin: '10px',
                    borderRadius: '10px',
                    padding: '5px'
                }}>
                    <p>JavaScript is a light-weight programming language used for the World Wide Web. The JavaScript Date object is useful for checking the date and time a visitor arrives at your website.</p>
                </div>
                <div style={{
                    color: 'white',
                    fontSize: '11px',
                    width: '400px',
                    background: '#3861FB',
                    margin: '10px 0px 0px 500px',
                    borderRadius: '10px',
                    padding: '5px'
                }}>
                    <p>JavaScript is a light-weight programming language used for the World Wide Web. The JavaScript Date object is useful for checking the date and time a visitor arrives at your website.</p>
                </div>
                <div style={{
                    color: 'white',
                    fontSize: '11px',
                    width: '400px',
                    background: '#2B3139',
                    margin: '10px',
                    borderRadius: '10px',
                    padding: '5px'
                }}>
                    <p>JavaScript is a light-weight programming language used for the World Wide Web. The JavaScript Date object is useful for checking the date and time a visitor arrives at your website.</p>
                </div>
            </div>
            <div style={{ background: '#2B3139', height: '40px', marginTop: '70px', marginLeft: '10px' }}>
                <div className='leftPaneDiv' style={{ alignItems: 'center' }}>
                    <i class="bi bi-dash-lg" style={{ color: 'darkgray', marginLeft: '15px', marginTop: '10px', marginRight: '10px', marginBottom: '10px' }}></i>
                    <input type="twxt" class="form-control" placeholder='Type your message...' id="typeYourMessage" aria-describedby="typeYourMessage" style={{ background: '#161A1E', marginBottom: '10px', marginTop: '10px', height: '25px', width: '782px', color: 'white', borderColor: '#1E2329' }}></input>
                    <button type="button" class="btn btn-primary" style={{
                        height: '30px',
                        width: '30px',
                        marginLeft: '10px',
                        marginBottom: '10px',
                        marginTop: '6px',
                    }}><i class="bi bi-send-fill" style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}></i></button>
                    <i class="bi bi-mic" style={{ color: 'darkgray', marginBottom: '10px', marginLeft: '15px', marginTop: '10px', }}></i>
                </div>
            </div>
        </div>
    )
}

export default ChatBox