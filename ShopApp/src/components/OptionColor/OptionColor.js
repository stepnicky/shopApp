import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item => <li key={item}><button type="button" onClick={() => props.setCurrentColor(item)} className={clsx(styles['color' + item[0].toUpperCase() + item.substr(1).toLowerCase()], item === props.currentColor && styles.active)} /></li>)}
            </ul>
          </div>
    )
}



export default OptionColor;