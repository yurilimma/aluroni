import styles from './Item.module.scss'
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';


export default function Item (props: Prato){
    const{id, title, description, photo} = props;
    const navigate = useNavigate();

    //obs.: para ele reconhecer o "photo", as imagens precisam estar no path: 'public/assets/pratos...'
    return(
        <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
            <div className={styles.item__imagem}> 
                <img src={photo} alt={title} />  
            </div>
            <div className={styles.item__descricao}>
                <div>
                    <h2>{title} </h2>
                    <p> {description} </p>
                </div>
                <TagsPrato {...props}/>
            </div>
        </div>
        
    )
}