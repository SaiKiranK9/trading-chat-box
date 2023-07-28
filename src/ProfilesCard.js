import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import { sample } from './DummyData';
import { ChatBox } from './ChatBox'

export function ProfilesCard() {

    return (
        <div className='leftPaneDiv'>
            <div className='leftChatDiv'>
                <div className='chatDiv'>
                    <h2 className='chatHeader whiteColor' style={{ marginLeft: '10px' }}>Chat</h2>
                    <i class="bi bi-three-dots-vertical verticalDots"></i>
                    <i class="bi bi-pen penIcon" style={{ color: 'darkgray' }}></i>
                </div>
                <div style={{ margin: '0px 0px 0px 10px' }}>
                    <input class="form-control" style={{
                        backgroundColor: '#161A1E',
                        margin: '12px 0px 10px 0px',
                        height: '30px',
                        borderRadius: '5px',
                        width: '165px',
                        color: '#FFFFFF',
                        borderColor: '#1E2329'
                    }} list="datalistOptions" id="exampleDataList" placeholder="search"></input>
                </div>
                <div style={{
                    borderBottom: '1px solid', paddingTop: '10px',
                    paddingLeft: '7px'
                }}>
                    {sample.map((data, key) => {
                        return (
                            <div className='leftPaneDiv' style={{ marginBottom: '10px' }}>
                                <div key={key}>
                                    <img src={data['image-url']} class="img-thumbnail userImage" alt="userPic" />
                                </div>
                                <div>
                                    <h3 className='whiteColor' style={{
                                        fontSize: '12px',
                                        marginLeft: '5px',
                                        marginBottom: '0px'
                                    }}>{data.description}</h3>
                                    <p className='whiteColor' style={{
                                        fontSize: '11px',
                                        marginLeft: '5px',
                                        color: 'darkgray'
                                    }}>sed up placeholder</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <ChatBox />
        </div>
    )

}