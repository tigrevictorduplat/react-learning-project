import styles from './LiveDisplay.module.css';
function LiveDisplay({titulo, texto}){
    return (
        <section className={styles.newContent}>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        </section>
    )
}

export default LiveDisplay