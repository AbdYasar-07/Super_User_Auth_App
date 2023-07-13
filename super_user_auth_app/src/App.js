import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./Components/AppLayout";
import Content from "./Components/Contents/Content";
import ContentOutlet from "./Components/Contents/ContentOutlet";
import { CodeSnippet } from "./Utils/CodeSnippet";
import NestedContentOutlet from "./Components/Contents/NestedContentOutlet";
import UserGroups from "./Components/Users/UserGroups";
import { AllGroupTable, AllGroupsContent } from "./Components/Users/Groups";

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
                <Route path="groups" element={<UserGroups />}>
                  <Route
                    index
                    element={
                      <AllGroupsContent
                        description={process.env.REACT_APP_AUTH_GROUPS_DESC}
                      />
                    }
                  ></Route>
                </Route>
                <Route path="roles" element={"Roles"}></Route>
                {/* <Route index path="GROUPS" element={"grp"}></Route>
                  <Route path="ALL GROUPS" element={"grpall"}></Route> */}
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
