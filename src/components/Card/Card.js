import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

export const Card = ({ id, title, image }) => {
    return (
        <div className={styles.wrapper}>
            <div>{title}</div>
            <img width={300} src={image} alt="" />
            <Link to={`/products/${id}`}>description</Link>
        </div>
    )
}
