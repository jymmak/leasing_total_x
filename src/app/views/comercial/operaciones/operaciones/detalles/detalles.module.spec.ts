import { DetallesModule } from './detalles.module';

describe('DetallesModule', () => {
  let detallesModule: DetallesModule;

  beforeEach(() => {
    detallesModule = new DetallesModule();
  });

  it('should create an instance', () => {
    expect(detallesModule).toBeTruthy();
  });
});
