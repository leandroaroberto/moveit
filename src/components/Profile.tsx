import styles from './../styles/components/Profile.module.css';


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFzaWNRrIOyaA/profile-displayphoto-shrink_800_800/0/1566748507957?e=1619654400&v=beta&t=BIdtb5xEAe6EnFMRf8GqHaekIqBBq0CN_9aZlAGWfQw" alt="Leandro Roberto" />
            <div>
                <strong>Leandro Roberto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}
