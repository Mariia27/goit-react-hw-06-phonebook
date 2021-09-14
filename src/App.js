import style from "./component/styles.module.css";

import Form from "./component/Form/Form";
import ContactList from "./component/Contact/Contact";
import SearchContact from "./component/Search/Search";

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
