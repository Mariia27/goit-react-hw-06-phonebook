import style from "./component/styles.module.css";

import Form from "./components/Form";
import ContactList from "./components/ContactList";
import SearchContact from "./components/SearchContact";

export default function Mobile() {
  return (
    <div className={style.container}>
      <h1 className={style.headingForm}>Телефонна книга</h1>
      <Form />
      {/* <Form onSubmit={addContact} contactList={onCheckName} /> */}
      {/* <SearchContact velue={filter} SearchContact={veluesFilter} /> */}
      {/* <ContactList contactList={getFilter()} onDeleted={deletedContact} /> */}
      <h2 className={style.contactList}>Контакти</h2>
      <SearchContact />
      <ContactList />
    </div>
  );
}
