

import { FaSpinner } from 'react-icons/fa';
import styles from './Spinner.module.css';
export default function Spinsner() {
    return (
        <div className= {styles.spinner}>
            <FaSpinner className={styles.spinning} size={60} />
        </div>
    )
}
