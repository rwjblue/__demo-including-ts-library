import Component from "@glimmer/component";
import LibraryStarter from 'ts-library-starter';

export default class DemoIncludingTsLibrary extends Component {
  get isCovered() {
    let example = new LibraryStarter.Example();
    return example.covered;
  }
}
