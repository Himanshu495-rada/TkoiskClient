import React from "react";
import styles from "./SearchSection.module.css";

function SearchSection() {
  return (
    <div className={styles.search_section}>
      <section className={styles.section_1}>
        <i className={`bi bi-search ${styles.search_icon}`}></i>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Search"
        />
      </section>

      <section className={styles.section_2}>
        <h1 className={styles.section_2_title}>What’s happening</h1>
        <div className={styles.section_2_tag}>
          <p className={styles.section_2_tag_title}>Trending in India</p>
          <p className={styles.section_2_tag_name}>#meloni</p>
          <p className={styles.section_2_tag_count}>42.5k posts</p>
          <a className={styles.section_2_tag_show_more}>Show More</a>
        </div>
      </section>

      <section className={styles.section_3}>
        <h1 className={styles.section_2_title}>Who to follow</h1>
        <div className={styles.profile_section}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i
              className={`bi bi-person-circle ${styles.profile_section_icon}`}
            />
            <div style={{ marginLeft: "20px" }}>
              <p className={styles.profile_section_username}>Chetan Tekade</p>
              <a className={styles.profile_section_userid}>@chetan_tekade</a>
            </div>
          </div>
          <button className={styles.follow_btn}>Follow</button>
        </div>
        <div className={styles.profile_section}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i
              className={`bi bi-person-circle ${styles.profile_section_icon}`}
            />
            <div style={{ marginLeft: "20px" }}>
              <p className={styles.profile_section_username}>Sameer Deshmukh</p>
              <a className={styles.profile_section_userid}>@sameer_deshmukh</a>
            </div>
          </div>
          <button className={styles.follow_btn}>Follow</button>
        </div>
        <div className={styles.profile_section}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i
              className={`bi bi-person-circle ${styles.profile_section_icon}`}
            />
            <div style={{ marginLeft: "20px" }}>
              <p className={styles.profile_section_username}>Himanshu Tekade</p>
              <a className={styles.profile_section_userid}>@himanshu_tekade</a>
            </div>
          </div>
          <button className={styles.follow_btn}>Follow</button>
        </div>
      </section>
    </div>
  );
}

export default SearchSection;
