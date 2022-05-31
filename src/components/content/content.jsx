import './content.style.css'

const Content = (element) => {
    let {id, date, price, items} = element.element
    return (
        <div>
            <div className="content"  key={id}>
                <div className="date">
                    <h4>{date}</h4>
                </div>
                <div className="cost">
                    <h4>{price} RS</h4>
                </div>
                <div className="list">{items}</div>
            </div>
        </div>
    )
}

export default Content