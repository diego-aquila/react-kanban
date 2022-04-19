import './Coluna.css'
import Cards from '../Cards/Cards'

const data = {
    todo: [
        <Cards img='male' label='Label' labelColor='blue'>Christmas Banners</Cards >,
        <Cards img='male' label='Label' labelColor='blue'>Redo Portfolio</Cards>
    ],
    inprogress: [
        <Cards img='female' label='Always' labelColor='orange'>Coffee Break</Cards >,
        <Cards img='female' label='Webflow' labelColor='orange'>Updating Portfolio</Cards>
    ],
    review: [
        <Cards img='male' label='Release' labelColor='purple'>Release to Figma Community</Cards >,
        <Cards img='male' label='Feedback' labelColor='purple'>User Feedback</Cards>,
        <Cards img='male' label='Sourcing' labelColor='purple' >Background images from <a href='https://www.humaaans.com/'>humaaans.com</a></Cards>
    ],
    done: [
        <Cards img='female' label='UI' labelColor='green'>Style Guide</Cards >,
        <Cards img='female' label='UI' labelColor='green'>Component Library</Cards>,
        <Cards img='female' label='UI' labelColor='green'>Sticker Components</Cards>
    ]
}

const Coluna = (props) => {
    const { nameColumn = 'To Do', color = 'blue', img } = props
    return (
        <div className={`coluna ${color}`}>
            <div className={`border-top border-top__${color}`}></div>
            <div className='column-title'>
                <img alt='icone' src={require(`./img/icon-${img}.png`)} />
                <h2>{nameColumn}</h2>
            </div>
            <div className='column-cards'>
                {data[`${nameColumn.replaceAll(' ', '').toLowerCase()}`]}
            </div>
        </div>
    )
}

export default Coluna