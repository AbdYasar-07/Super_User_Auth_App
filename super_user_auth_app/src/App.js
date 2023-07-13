import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./Components/AppLayout";
import Content from "./Components/Contents/Content";
import NestedContent from "./Components/Contents/NestedContents";
import ContentBody from "./Components/Contents/ContentBody";
import ContentOutlet from "./Components/Contents/ContentOutlet";
import { CodeSnippet } from "./Utils/CodeSnippet";
import { ALLGroupsContent, AllGroupTable } from "./Components/Users/Groups";
import UserGroups from "./Components/Users/UserGroups";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="users" element={<Content />}>
              <Route index element={<ContentOutlet />}></Route>
              <Route path=":userId" element={<NestedContent />}>
              <Route  path="Profile" element={<CodeSnippet title={"User Profile"}/>}></Route>
              <Route  path="Groups" element={<UserGroups/>}>
                <Route index path="GROUPS" element={"grp"}></Route>
                <Route path="ALL GROUPS" element={"grpall"}></Route>
              </Route>
              <Route  path="Roles" element={"Sdsd"}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
