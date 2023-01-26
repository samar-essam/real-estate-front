export class Column {
  public type?:
    | 'text'
    | 'id'
    | 'email'
    | 'date'
    | 'actions'
    | 'status'
    | 'hyperlink';
  public order?: number;
  public name?: string;
  public options?: string[];
  public state?: string;
  public constructor(init: Partial<Column>) {
    Object.assign(this, init);
  }
}
