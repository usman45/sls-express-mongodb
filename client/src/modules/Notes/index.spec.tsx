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

  it("should start fetching init data", () => {
    expect(notesScreen.find(NotesScreen).exists()).toBeTruthy();
  });
});
