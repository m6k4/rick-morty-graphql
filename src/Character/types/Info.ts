import { InfoDTO } from '@/types/types';

export default class Info {
  constructor(
    private readonly count: number,
    private readonly pages: number,
    private readonly next: number,
    private readonly prev: number,
  ) {}

  static fromDTO(dto: InfoDTO): Info {
    return new Info(
      dto.count,
      dto.pages,
      dto.next,
      dto.prev,
    );
  }

  getCount(): number {
    return this.count;
  }

  getPages(): number {
    return this.pages;
  }

  getNext(): number {
    return this.next;
  }

  getPrev(): number {
    return this.prev;
  }
}
