import './Main.css'
import Coluna from '../Coluna/Coluna'

const Main = () => {
    return (
        <main className='main'>
            <h1 className='main-title'>Kanban</h1>
            <div className='main-container'>
                <Coluna nameColumn='To Do' color='blue' img='cardeneta' />
                <Coluna nameColumn='Inprogress' color='orange' img='computer' />
                <Coluna nameColumn='Review' color='purple' img='pencil' />
                <Coluna nameColumn='Done' color='green' img='rocket' />
            </div>
        </main >
    )
}

export default Main