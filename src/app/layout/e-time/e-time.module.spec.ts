import { ETimeModule } from './e-time.module';

describe('ETimeModule', () => {
  let eTimeModule: ETimeModule;

  beforeEach(() => {
    eTimeModule = new ETimeModule();
  });

  it('should create an instance', () => {
    expect(eTimeModule).toBeTruthy();
  });
});
