import './App.css';
import ContactForm from './components/contact_form/ContactForm.jsx';
import SearchBox from './components/search_box/SearchBox.jsx';
import ContactList from './components/contact_list/ContactList.jsx';

const App = () => {

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App;
