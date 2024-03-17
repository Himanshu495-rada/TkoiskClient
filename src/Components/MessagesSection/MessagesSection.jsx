import React from "react";
import styles from "./MessagesSection.module.css";

function MessagesSection() {
  return (
    <div className={styles.messages_section}>
      <section className={styles.header}>
        <h1 className={styles.title}>Messages</h1>
        <i className="bi bi-gear"></i>
        <i class="bi bi-envelope-plus"></i>
      </section>
      <section className={styles.active_profiles}></section>
      <section className={styles.search_section}></section>
      <section className={styles.messages_section}></section>
    </div>
  );
}

export default MessagesSection;
