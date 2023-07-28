import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { ProfilesCard } from './ProfilesCard';

export function HeaderAndNavPage(params) {
    var date = new Date()

    return (
        <>
            <div className='App-header'>
                <div className='headerDiv'>
                    <h1 className='headerFont'>LAABHUM</h1>
                    <p className='paragraphFont'>SOCIAL TRADING</p>
                </div>
                <div>
                    <ul class="nav-style nav-pills-style">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Cockpit</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Timeline</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Orders</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Analytics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Strategy Builder</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Social Connect</a>
                        </li>
                    </ul>
                </div>
                <div className='timeDiv' style={{ marginLeft: '375px' }}>
                    <div><i class="bi bi-clock-fill" style={{ color: 'slategray', marginRight: '12px' }}></i></div>
                    <div style={{ marginTop: '12px' }}>
                        <p className='timeStyle'>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</p>
                        <p className='dateStyle'>{`${date.getMonth()}  ${date.getDay()},  ${date.getFullYear()}`}</p>
                    </div>
                    <i class="bi bi-chat-left-dots-fill" style={{ color: '#3861FB', marginLeft: '15px' }}></i>
                    <i class="bi bi-bell-fill" style={{ color: '#FFFFFF', marginLeft: '15px' }}></i>
                    <i class="bi bi-person-lines-fill" style={{ color: '#3861FB', marginLeft: '22px' }}></i>
                    <i class="bi bi-brightness-high" style={{ color: '#FFFFFF', marginLeft: '12px' }}></i>
                </div>
            </div>
            <ProfilesCard />
        </>
    )
}