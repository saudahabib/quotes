export class Quote {
  public showAuthor: boolean;
  public showSubmitter: boolean;
  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public submitter: string,

  ){
    this.showAuthor= false;
    this.showSubmitter= false;
  }
}
