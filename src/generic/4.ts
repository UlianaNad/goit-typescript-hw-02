/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageInformation{
  title: string;
}

class Component <T> {
  constructor (public props:T) {

  }
}

class Page extends Component<PageInformation> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};

