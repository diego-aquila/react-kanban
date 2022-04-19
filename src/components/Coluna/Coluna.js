import './Coluna.css'
import Cards from '../Cards/Cards'

const data = [
    { title: 'To Do', img: 'male', label: 'Label', labelColor: 'blue', children: 'Christmas Banners' },
    { title: 'To Do', img: 'male', label: 'Label', labelColor: 'blue', children: 'Redo Portfolio' },
    { title: 'Inprogress', img: 'female', label: 'Always', labelColor: 'orange', children: 'Coffee Break' },
    { title: 'Inprogress', img: 'female', label: 'Webflow', labelColor: 'orange', children: 'Updating Portfolio' },
    { title: 'Review', img: 'male', label: 'Release', labelColor: 'purple', children: 'Release to Figma Community' },
    { title: 'Review', img: 'male', label: 'Feedback', labelColor: 'purple', children: 'User Feedback' },
    { title: 'Review', img: 'male', label: 'Sourcing', labelColor: 'purple', children: 'Background images from humaaans.com' },
    { title: 'Done', img: 'female', label: 'UI', labelColor: 'green', children: 'Style Guide' },
    { title: 'Done', img: 'female', label: 'UI', labelColor: 'green', children: 'Component Library' },
    { title: 'Done', img: 'female', label: 'UI', labelColor: 'green', children: 'Sticker Components' }
]

const Coluna = (props) => {
    const { nameColumn = 'To Do', color = 'blue', img } = props
    const dataFilter = data.filter(e => e.title === nameColumn)
    return (
        <div className={`coluna ${color}`}>
            <div className={`border-top border-top__${color}`}></div>
            <div className='column-title'>
                <img alt='icone' src={require(`./img/icon-${img}.png`)} />
                <h2>{nameColumn}</h2>
            </div>
            <div className='column-cards'>
                {dataFilter.map(e => <Cards img={e.img} label={e.label} labelColor={e.labelColor}>{e.children}</Cards >)}
            </div>
        </div>
    )
}

export default Coluna