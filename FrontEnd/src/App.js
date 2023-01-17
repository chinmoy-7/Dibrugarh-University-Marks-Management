import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBatch from "./Components/AddBatch";
import AddStudent from "./Components/AddStudent";
import Add_Update from "./Components/Add_Update";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Main from "./Components/Main";
import SelectCourse from "./Components/SelectCourse";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthContextProvider } from "./Context/AuthContext";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { DataContextProvider } from "./Context/DataContext";
import Semester from "./Components/Semester";
import Students_Details from "./Components/Students_Details";
import Update_Marks from "./Components/Update_Marks";
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>

        <DataContextProvider>

          <Main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/log-in" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />

              <Route path="/select-course" element={<ProtectedRoute><SelectCourse /></ProtectedRoute>} />
              <Route path="/add-batch" element={<ProtectedRoute><AddBatch /></ProtectedRoute>} />
              <Route path="/add-update" element={<ProtectedRoute> <Add_Update /></ProtectedRoute>} />
              <Route path="/add-student" element={<ProtectedRoute> <AddStudent /></ProtectedRoute>} />
              <Route path="/choose-semester" element={<ProtectedRoute> <Semester /></ProtectedRoute>} />
              <Route path="/students-details" element={<ProtectedRoute> <Students_Details /></ProtectedRoute>} />
              <Route path="/update-marks" element={<ProtectedRoute> <Update_Marks /></ProtectedRoute>} />
            </Routes>
          </Main>

        </DataContextProvider>

      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
