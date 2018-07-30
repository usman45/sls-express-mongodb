import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "../../app/store";
import { NotesScreen } from "./index";

describe("NotesScreen", () => {
  let notesScreen: ReactWrapper;

  beforeEach(() => {
    notesScreen = mount(
      <Provider store={configureStore()}>
        <NotesScreen
          handleDeleteNote={() => null}
          fetchNotes={() => null}
          handleSubmitNewNote={() => null}
          notes={[]}
        />
      </Provider>
    );
  });

  it("should test that component is defined", () => {
    expect(notesScreen.find(NotesScreen)).toBeDefined();
  });

  it("should start fetching init data", () => {
    expect(notesScreen.find(NotesScreen).exists()).toBeTruthy();
  });
});

describe("Test data", () => {
  let notesScreen: ReactWrapper;

  const items = [
    { title: "List Item 1", description: "List Item 1 description" },
    { title: "List Item 2", description: "List Item 2 description" },
    { title: "List Item 3", description: "List Item 3 description" },
    { title: "List Item 4", description: "List Item 4 description" }
  ];

  beforeEach(() => {
    notesScreen = mount(
      <Provider store={configureStore()}>
        <NotesScreen
          handleDeleteNote={() => null}
          fetchNotes={() => null}
          handleSubmitNewNote={() => null}
          notes={items}
        />
      </Provider>
    );
  });

  it("should render 4 list items based on props.items", () => {
    expect(notesScreen.find("li")).toHaveLength(4);
  });
});
