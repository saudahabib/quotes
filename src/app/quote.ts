export class Quote {
  public showAuthor: boolean;
  public showSubmitter: boolean;
  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public submitter: string,
    public timePassed: Date,
    public likes: number,
    public hates: number

  ){
    this.showAuthor= false;
    this.showSubmitter= false;
  }
}
