import { globalReadListPipe } from './globalReadList.pipe';

describe('globalReadListPipe', () => {
  it('create an instance', () => {
    const pipe = new globalReadListPipe();
    expect(pipe).toBeTruthy();
  });
});
