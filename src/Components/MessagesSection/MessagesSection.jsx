import React from "react";
import styles from "./MessagesSection.module.css";
import person_1 from "../../Assets/person_1.jpg";
import person_2 from "../../Assets/person_2.jpg";
import giorgia_meloni from "../../Assets/Giorgia_Meloni.jpg";
import narendra_modi from "../../Assets/Narendra_Modi.png";

function MessagesSection() {
  return (
    <div className={styles.messages_section}>
      <section className={styles.header}>
        <h1 className={styles.title}>Messages</h1>
        <div>
          <i className="bi bi-gear" style={{ marginRight: "10px" }}></i>
          <i class="bi bi-envelope-plus"></i>
        </div>
      </section>

      <section className={styles.section_2}>
        <p className={styles.section_2_title}>Active profiles</p>
        <div className={styles.profiles_container}>
          <img
            className={styles.active_profile_img}
            src={person_1}
            alt="person_1"
          />
          <img
            className={styles.active_profile_img}
            src={person_2}
            alt="person_2"
          />
        </div>
      </section>

      <section className={styles.section_3}>
        <i className={`bi bi-search ${styles.section_3_icon}`}></i>
        <input
          type="text"
          className={styles.section_3_input}
          placeholder="Search Direct Messages"
        />
      </section>

      <section className={styles.section_4}>
        <table className={styles.section_4_table}>
          <tr className={styles.section_4_row}>
            <img
              className={styles.section_4_profile_img}
              src={giorgia_meloni}
              alt="Giorgia Meloni"
            />
            <div className={styles.section_4_profile_details}>
              <h1 className={styles.section_4_profile_name}>Giogia Meloni</h1>
              <p className={styles.section_4_profile_id}>@giorgia_meloni</p>
            </div>
          </tr>
          <tr className={styles.section_4_row}>
            <img
              className={styles.section_4_profile_img}
              src={narendra_modi}
              alt="Narendra Modi"
            />
            <div className={styles.section_4_profile_details}>
              <h1 className={styles.section_4_profile_name}>Narendra Modi</h1>
              <p className={styles.section_4_profile_id}>@narendra_modi</p>
            </div>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default MessagesSection;
