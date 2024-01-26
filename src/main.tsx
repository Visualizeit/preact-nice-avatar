import { render } from "preact";
import NiceAvatar from "./NiceAvatar";

const App = () => <NiceAvatar />;

render(<App />, document.getElementById("app")!);
