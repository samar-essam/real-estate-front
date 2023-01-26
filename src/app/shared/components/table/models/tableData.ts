import { Column } from "./column";

export class TableData<Type> {
  public rows?: Type[];
  public columns?: { [name: string]: Column };
  public total?: number;
  public limit?: number;

  public constructor(init: Partial<TableData<Type>>) {
    Object.assign(this, init);
  }
}
