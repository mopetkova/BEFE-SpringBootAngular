import { EmployeeFilterPipe } from './employee-filter';

describe('EmployeeFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new EmployeeFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
