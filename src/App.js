
import {useState} from 'react';
import StudentList from './components/StudentList';
import NewStudent from './components/NewStudent';
import UpdateStudent from './components/UpdateStudent';

import {Provider} from 'react-redux';
import {store} from './app/store';

function App() {
    const [selectStudent, setSelectStudent] = useState(null);
    return ( 
        <Provider store={store}>
            <StudentList setSelectStudent = {setSelectStudent} />
            <NewStudent />
            <UpdateStudent selectStudent = {selectStudent} />
        </Provider>

     );
}

export default App;
