import * as React from "react";

const QUOTE_SERVICE_URL = "http://localhost:3000/api/notes";

export type IMyComponentProps = {
  someDefaultValue?: string;
};

export type IMyComponentState = {
  isFetching: boolean;
  notes: any;
};

export default class HomeScreen extends React.Component<
  IMyComponentProps,
  IMyComponentState
> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = { isFetching: false, notes: [] };
  }

  render() {
    const { isFetching, notes } = this.state;
    if (!notes) {
      return;
    }
    return (
      <div className="App">
        <ul>
          {notes.map(hit => (
            <li key={hit.title}>
              {hit.title}
              {isFetching}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchQuotesWithFetch();
  }

  fetchQuotesWithFetch = () => {
    this.setState({ ...this.state, isFetching: true });
    fetch(QUOTE_SERVICE_URL)
      .then(response => response.json())
      .then(result => this.setState({ notes: result, isFetching: false }))
      .catch(e => console.log(e));
  };
}
