import { TestBed } from '@angular/core/testing';

import { AnonymousUserGuard } from './anonymous-user.guard';

describe('AnonymousUserGuard', () => {
  let guard: AnonymousUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnonymousUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
