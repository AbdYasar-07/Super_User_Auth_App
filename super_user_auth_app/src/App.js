import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./Components/AppLayout";
import Content from "./Components/Contents/Content";
import ContentOutlet from "./Components/Contents/ContentOutlet";
import { CodeSnippet } from "./Utils/CodeSnippet";
import NestedContentOutlet from "./Components/Contents/NestedContentOutlet";
import UserGroups from "./Components/Users/UserGroups";
import Groups, {
  AllGroupTable,
  AllGroupsContent,
} from "./Components/Users/Groups";
import Roles from "./Components/Users/Roles";
import ModalDialog from "./Components/UserDetails";
import GroupsOutlet from "./Components/Contents/GroupsOutlet";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="users" element={<Content />}>
              <Route index element={<ContentOutlet />}></Route>
              <Route path=":userId" element={<NestedContentOutlet />}>
                <Route
                  index
                  path="profile"
                  element={
                    <CodeSnippet
                      title="User Profile"
                      code={JSON.stringify(
                        JSON.parse(localStorage.getItem("user_profile")),
                        null,
                        2
                      )}
                    />
                  }
                ></Route>
                <Route path="groups" element={<GroupsOutlet />}>
                  <Route path="show" element={<Groups />}></Route>
                  <Route path="allgroups" element={"All Groups"}></Route>
                </Route>
                <Route path="roles" element={<Roles />}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
