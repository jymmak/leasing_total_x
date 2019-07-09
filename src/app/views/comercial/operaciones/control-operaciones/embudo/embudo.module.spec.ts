import { EmbudoModule } from './embudo.module';

describe('EmbudoModule', () => {
  let embudoModule: EmbudoModule;

  beforeEach(() => {
    embudoModule = new EmbudoModule();
  });

  it('should create an instance', () => {
    expect(embudoModule).toBeTruthy();
  });
});
