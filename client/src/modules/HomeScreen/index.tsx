import * as React from "react";

const QUOTE_SERVICE_URL = "http://localhost:3000/api/notes";

export type IMyComponentProps = {
  someDefaultValue?: string;
};

interface Notes {
  title: string;
  description: string;
}

export type IMyComponentState = {
  isFetching: boolean;
  notes: Array<Notes>;
  error: any;
};

export default class HomeScreen extends React.Component<
  IMyComponentProps,
  IMyComponentState
> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = { isFetching: false, notes: [], error: null };
  }

  render() {
    const { isFetching, notes, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isFetching) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="App">
        <ul>
          {notes.map(hit => (
            <li key={hit.title}>
              {hit.title} {hit.description}
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
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(result => this.setState({ notes: result, isFetching: false }))
      .catch(error => this.setState({ error, isFetching: false }));
  };
}
